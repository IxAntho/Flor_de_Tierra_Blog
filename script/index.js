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
      link.classList.add("nav__link_fixed");
    });
  } else {
    // Remove the 'fixed' class to revert to the initial state
    navBar.classList.remove("nav__fixed");
    logo.src = "../images/FdT.png";
    logo.classList.remove("nav__logo_fixed");
    navLinks.forEach((link) => {
      link.classList.remove("nav__link_fixed");
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

/*document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".gallery__container");
  const heading = document.querySelector(".gallery__heading");
  const sectionBackground = document.querySelector(".gallery__background");
  const text = document.querySelector(".gallery__span");
  const imageGallery = document.querySelector(".gallery-wrap");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // Adjust the following values as needed
    const headingChangePosition = 600;
    const imageGalleryAppearPosition = 600;

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
});*/

/*document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".gallery__container");
  const background = document.querySelector(".gallery__background");
  const heading = document.querySelector(".gallery__heading");
  const span = document.querySelector(".gallery__span");
  const imageGallery = document.querySelector("#image-gallery");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    // Adjust the following values as needed
    const headingChangePosition = 200;
    const imageGalleryAppearPosition = 400;

    if (scrollPosition > headingChangePosition) {
      heading.textContent = "New Heading";
      span.textContent = "New Text";
      heading.style.opacity = 0;
      span.style.opacity = 0;
      container.style.top = "0";
      background.style.filter = "blur(10px)";
      background.style.backgroundColor = "white";
    }

    if (scrollPosition > imageGalleryAppearPosition) {
      imageGallery.style.display = "flex";
    }
  });
});*/

// Get references to the necessary elements
const gallery = document.querySelector(".gallery");
const galleryItems = document.querySelectorAll(".gallery__item");

// Add event listeners to each gallery item
galleryItems.forEach((item) => {
  item.addEventListener("mouseenter", handleItemHover);
  item.addEventListener("mouseleave", handleItemLeave);
});

// Function to handle item hover
function handleItemHover(event) {
  // Get the background image of the hovered item
  const backgroundImage = getComputedStyle(event.target).backgroundImage;

  // Set the background of the gallery to the hovered item's background image
  gallery.style.backgroundImage = backgroundImage;
}

// Function to handle item leave (reset background to default)
function handleItemLeave() {
  // Reset the background of the gallery to its default image
  gallery.style.backgroundImage = 'url("../images/peaches.jpg")'; // Replace with your default background image
}
