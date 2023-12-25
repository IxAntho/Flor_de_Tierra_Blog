function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Get the navbar element
const navBar = document.getElementById("navbar");
const navLinks = document.getElementById("nav__links");

// Get the height of the info bar
const headerSocialHeight =
  document.querySelector(".header__social").offsetHeight;

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Check if the user has scrolled past the info bar
  if (window.scrollY > headerSocialHeight) {
    // Add the 'fixed' class to the navbar to make it fixed
    navBar.classList.add("nav__fixed");
    navLinks.classList.add("nav__links_fixed");
  } else {
    // Remove the 'fixed' class to revert to the initial state
    navBar.classList.remove("nav__fixed");
    navLinks.classList.remove("nav__links_fixed");
  }
});
