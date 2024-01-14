function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Get the navbar element
const navBar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav__link");
const logo = document.getElementById("navLogo");

/*// Get the height of the info bar with .offsetHeight
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
});*/

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
      dynamicTextElement.style.color = "#067507"; // Default color for other words
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

function submitForm() {
  var emailValue = $(".form__email").val();
  var nameValue = $(".form__name").val();

  // Check if both email and name have values
  if (emailValue && nameValue) {
    // Prepare data for submission
    var formData = {
      email: emailValue,
      name: nameValue,
    };

    // Send data to Formspree using AJAX
    $.ajax({
      type: "POST",
      url: "https://formspree.io/f/mjvnvvgp",
      data: formData,
      dataType: "json",
      success: function () {
        // Success callback
        console.log("Form submitted successfully");
        // You can perform additional actions here, such as showing a success message
      },
      error: function () {
        // Error callback
        console.log("Error submitting form");
        // You can handle errors or show an error message
      },
    });
  } else {
    // Handle the case when either email or name is empty
    console.log("Please fill in both email and name");
    // You can also show an error message to the user
  }
}

$(".form__email").on("change keyup paste", function () {
  if ($(this).val()) {
    $(".icon-paper-plane").addClass("next");
  } else {
    $(".icon-paper-plane").removeClass("next");
  }
});

$(".next-button").hover(function () {
  $(this).css("cursor", "pointer");
});

$(".next-button.email").click(function () {
  console.log("Something");
  $(".email-section").addClass("fold-up");
  $(".name-section").removeClass("folded");
});

$(".form__name").on("change keyup paste", function () {
  if ($(this).val()) {
    $(".icon-lock").addClass("next");
  } else {
    $(".icon-lock").removeClass("next");
  }
});

$(".next-button").hover(function () {
  $(this).css("cursor", "pointer");
});

$(".next-button.name").click(function (e) {
  e.preventDefault(); // Prevent the default form submission
  submitForm();
  console.log("form submitted");
  $(".password-section").addClass("fold-up");
  $(".contact__success").css("marginTop", 0);
});
