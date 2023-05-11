const hamburgerMenu = document.querySelector(".hamburger-menu");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
  navLinks.classList.toggle("active");
});

 window.addEventListener("resize", () => {
if (window.innerWidth > 768) {
navLinks.classList.remove("active");
line1.classList.remove("active");
line2.classList.remove("active");
line3.classList.remove("active");
}
 });