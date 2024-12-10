function getMinPerSlide() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1200) return 3; // Breakpoint XL
  if (screenWidth >= 992) return 2; // Breakpoint LG
  if (screenWidth >= 768) return 1; // Breakpoint MD
  return 1;
}

const splide = new Splide(".splide", {
  type: "loop",
  perPage: getMinPerSlide(),
}).mount();

window.addEventListener("resize", () => {
  const newPerPage = getMinPerSlide();

  if (splide.options.perPage !== newPerPage) {
    splide.options = { ...splide.options, perPage: newPerPage };
    splide.refresh();
  }
});

// Mobile nav
const navLinks = document.querySelectorAll(".navbar-collapse a");
const collapseElement = document.querySelector(".navbar-collapse");

if (collapseElement) {
  const collapse = new bootstrap.Collapse(collapseElement, {
    toggle: false,
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (collapseElement.classList.contains("show")) {
        collapse.hide();
      }
    });
  });
}
