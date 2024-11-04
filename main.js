/*
For each navigation link,
if the link is the same link in the browser,
add the active class to the link
*/
document.addEventListener("DOMContentLoaded", () => {
	const links = document.querySelectorAll(".nav-link");
	let pathname = window.location.pathname;

	// Normalize the home page path
	if (pathname === "/") {
		pathname = "/index.html";
	}

	links.forEach((link) => {
		// Ensure the link is an <a> element and compare with normalized path
		if (link.tagName === "A") {
			let linkPathname = new URL(link.href).pathname;

			// Normalize link path if it's the home page
			if (linkPathname === "/") {
				linkPathname = "/index.html";
			}

			// Add the active class if the pathnames match
			if (linkPathname === pathname) {
				link.classList.add("active");
			}
		}
	});
});
