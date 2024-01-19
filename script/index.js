//smooth scrolling function
/**
 * Scrolls to a section of the webpage with vertical centering.
 * @param {string} sectionId - The ID of the section to scroll to.
 */
function scrollToSection(sectionId) {
  // Get the reference to the section element using its ID
  var section = document.getElementById(sectionId);

  // Get the height of the viewport
  var windowHeight = window.innerHeight;

  // Get the height of the section
  var sectionHeight = section.clientHeight;

  // Calculate the offset needed to vertically center the section
  var offset = (sectionHeight - windowHeight) / 2;

  if (sectionId === "home" || sectionId === "services") {
    section.scrollIntoView({ behavior: "smooth" });
    return;
  }
  // Use scrollIntoView with options for smooth scrolling and centering
  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

//Header animation logic
const headerTextContainer = document.getElementById("header__text");
const headerHeading = document.getElementById("header__heading");
const headerParagraph = document.getElementById("header__paragraph");
const headerIcon = document.getElementById("header__icon");
const headerSpanAccent = document.getElementById("header__span-accent");
const headerImg1 = document.getElementById("header__image_1");
const headerImg2 = document.getElementById("header__image_2");
const headerImg3 = document.getElementById("header__image_3");
const headerImg4 = document.getElementById("header__image_4");
const headerImg5 = document.getElementById("header__image_5");
const headerImg6 = document.getElementById("header__image_6");
const headerImg7 = document.getElementById("header__image_7");
const headerImg8 = document.getElementById("header__image_8");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  headerTextContainer.style.marginTop = value + "px";
  headerImg1.style.marginTop = value * -1.5 + "px";
  headerImg2.style.marginTop = value * -0.89 + "px";
  headerImg3.style.marginTop = value * -1.5 + "px";
  headerImg4.style.marginTop = value * -0.4 + "px";
  headerImg5.style.marginTop = value * -0.5 + "px";
  headerImg6.style.marginTop = value * -1.15 + "px";
  headerImg7.style.marginTop = value * -0.5 + "px";
  headerImg8.style.marginTop = value * -0.8 + "px";
});

//Responsive nav bar functions
$(document).ready(function () {
  $("html").on("DOMMouseScroll mousewheel", function (e) {
    if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
      //alternative options for wheelData: wheelDeltaX & wheelDeltaY
      //scroll down
      console.log("Down");
      $("#header__nav-bar").addClass("header__nav-bar_hidden");
    } else {
      //scroll up
      console.log("Up");
      $("#header__nav-bar").removeClass("header__nav-bar_hidden");
    }
    //prevent page fom scrolling
    //return false;
  });

  // On click show menu on small screen

  var $menu = $("#nav"),
    $menulink = $(".header__menu-link"),
    $menuContainer = $(".header__menu-link-container");

  $menulink.click(function () {
    $menulink.toggleClass("nav_deployed");
    $menu.toggleClass("nav_deployed");
    return false;
  });

  var toggled = 0;

  $(".header__menu-link").click(function () {
    if (toggled == 0) {
      $(".bar3").stop().transition({ rotate: "45", "margin-top": "13px" });
      $(".bar2").stop().transition({ opacity: "0" }, "fast");
      $(".bar1").stop().transition({ rotate: "-45", "margin-top": "13px" });
      toggled++;
      console.log("toggled down");
    } else {
      $(".bar3").stop().transition({ rotate: "+=135", "margin-top": "3px" });
      $(".bar2").transition({ opacity: "1" }, "fast");
      $(".bar1").stop().transition({ rotate: "-=135", "margin-top": "23px" });
      toggled--;

      console.log("Togged Up");
    }
  });
});

//Services and products animation logic
const servicesTitles = document.querySelectorAll(".services__title");
const servicesItems = document.querySelectorAll(".services__item");

const servicesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.id == "services__title"
        ? entry.target.classList.toggle(
            "services__title_show",
            entry.isIntersecting
          )
        : entry.target.classList.toggle(
            "services__item_show",
            entry.isIntersecting
          );
    });
  },
  {
    threshold: 1,
  }
);

servicesTitles.forEach((title) => {
  servicesObserver.observe(title);
});
servicesItems.forEach((item) => {
  servicesObserver.observe(item);
});

//Dymanic services text functions
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

//Colabs animation logic
const colabContainer = document.getElementById("colaborations__container");
console.log("offset top", colabContainer.offsetTop);
/*window.addEventListener("scroll", () => {
  let value = window.scrollY;

  colabContainer.style.marginTop = value * 0.1 + "px";
  colabContainer.style.marginLeft = value * -0.1 + "px";
});*/

//Gallery dymanic background functions
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

//FAQ animation logic
const faq = document.querySelectorAll(".faq__card");

const faqObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      entry.target.classList.toggle("faq__card_show", entry.isIntersecting);
      if (entry.isIntersecting) {
        faqObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
    rootMargin: "-50px",
  }
);

faq.forEach((card) => {
  faqObserver.observe(card);
});

//Form functions
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
