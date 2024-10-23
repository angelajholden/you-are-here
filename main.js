document.addEventListener("DOMContentLoaded", () => {
	const links = document.querySelectorAll(".nav-link");
	const pathname = window.location.pathname;
	links.forEach((link) => {
		if (link.pathname == pathname) {
			link.classList.add("active");
		}
	});
});
