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

function progress() {
  var p = $("#progress");
  var q = $("label").length;
  var w = parseInt($("input").width() / q);
  p.animate({ width: "+=" + w + "px" });
}

function nextQ() {
  var a = [];
  var v = $("input").val();
  var q = $("label").length;
  var c = $("#qContainer > div");
  var s = parseInt($(".currentStep").html());

  if (v == "") {
    alert("Please answer the question!");
  } else if (s == q) {
    $("#wrapper").fadeOut("normal", function () {
      $("#success").fadeIn("normal");
    });
  } else {
    a.push(v);
    progress();
    s++;
    $(".currentStep").html(s);
    c.animate({ top: "-=45px" });
    $("input").val("").focus();
  }
}

$(document).ready(function () {
  progress();

  $("input").keyup(function (event) {
    if (event.keyCode == 13) {
      $("#submit").click();
    }
  });
});
