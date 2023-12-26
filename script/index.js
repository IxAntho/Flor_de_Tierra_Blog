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
    logo.src = "../images/FDTFixed.png";
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

    // Check if the current word is 'Agricultura' and apply different color
    if (words[index] === "Agricultura") {
      dynamicTextElement.style.color = "#B08900"; // Set your desired color
    } else {
      dynamicTextElement.style.color = "#009e00"; // Default color for other words
    }

    // Apply the animation
    dynamicTextElement.style.animation = "slideUp 0.5s ease";

    index = (index + 1) % words.length;
  }

  // Update the text every 2 seconds (adjust as needed)
  setInterval(updateText, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".gallery__container");
  const sectionBackground = document.querySelector(".gallery__background");
  const heading = document.querySelector(".gallery__heading");
  const text = document.querySelector(".gallery__span");
  const imageGallery = document.querySelector(".gallery-wrap");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // Adjust the following values as needed
    const headingChangePosition = 200;
    const imageGalleryAppearPosition = 400;

    if (scrollPosition > headingChangePosition) {
      heading.textContent = "Flor de Tierra";
      text.textContent = "";
      heading.style.opacity = 0;
      text.style.opacity = 0;
      container.style.top = "75px";
      sectionBackground.style.filter = "blur(10px)";
      sectionBackground.style.backgroundColor = "white";
    }

    if (scrollPosition > imageGalleryAppearPosition) {
      imageGallery.style.display = "flex";
    }
  });
});
