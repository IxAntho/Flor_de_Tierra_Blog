function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Get the navbar element
const navBar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav__link");
const logo = document.getElementById("navLogo");

// Get the height of the info bar with .offsetHeight
const headerSocialHeight =
  document.querySelector(".header__social").offsetHeight;

// Add a scroll event listener
window.addEventListener("scroll", () => {
  // Check if the user has scrolled past the info bar
  if (window.scrollY > headerSocialHeight) {
    // Add the 'fixed' class to the navbar to make it fixed
    navBar.classList.add("nav__fixed");
    logo.src = "../images/FDTSoloLogo.png";
    logo.classList.add("nav__logo_fixed");
    navLinks.forEach((link) => {
      link.style.color = "#009e00";
    });
  } else {
    // Remove the 'fixed' class to revert to the initial state
    navBar.classList.remove("nav__fixed");
    logo.src = "../images/FdT.png";
    logo.classList.remove("nav__logo_fixed");
    navLinks.forEach((link) => {
      link.style.color = "#cccccc";
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dynamicTextElement = document.getElementById("dynamic-text");
  const words = ["Orgánico", "Sustentable", "Alta Calidad", "Agricultura"];
  let index = 0;

  function updateText() {
    // Reset the style before changing the content
    dynamicTextElement.style.animation = "none";
    dynamicTextElement.offsetHeight; // Trigger reflow to apply style reset
    dynamicTextElement.style.animation = null;

    // Change the content
    dynamicTextElement.textContent = words[index];

    // Apply the animation
    dynamicTextElement.style.animation = "slideUp 0.5s ease";

    index = (index + 1) % words.length;
  }

  // Update the text every 2 seconds (adjust as needed)
  setInterval(updateText, 2000);
});
