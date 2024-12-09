// Carousel
// let items = document.querySelectorAll(".carousel .carousel-item");

// function getMinPerSlide() {
//   const screenWidth = window.innerWidth;

//   // if (screenWidth >= 1400) return 4; // Breakpoint XXL
//   if (screenWidth >= 1200) return 3; // Breakpoint XL
//   if (screenWidth >= 992) return 2; // Breakpoint LG
//   if (screenWidth >= 768) return 1; // Breakpoint MD
//   return 1;
// }

// function updateCarousel() {
//   let items = document.querySelectorAll(".carousel .carousel-item");
//   const minPerSlide = getMinPerSlide();

//   items.forEach((el) => {
//     el.innerHTML = el.innerHTML.split('<div class="carousel-item">')[0];

//     let next = el.nextElementSibling;
//     for (let i = 1; i < minPerSlide; i++) {
//       if (!next) {
//         next = items[0];
//       }
//       let cloneChild = next.cloneNode(true);
//       el.appendChild(cloneChild.children[0]);
//       next = next.nextElementSibling;
//     }
//   });
// }

// updateCarousel();
// window.addEventListener("resize", updateCarousel);
// let items = document.querySelectorAll(".carousel .carousel-item");

// items.forEach((el) => {
//   const minPerSlide = 3;
//   let next = el.nextElementSibling;
//   for (var i = 1; i < minPerSlide; i++) {
//     if (!next) {
//       // wrap carousel by using first child
//       next = items[0];
//     }
//     let cloneChild = next.cloneNode(true);
//     el.appendChild(cloneChild.children[0]);
//     next = next.nextElementSibling;
//   }
// });

// Carousel
new Splide(".splide", {
  type: "loop",
  perPage: 3,
}).mount();

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
