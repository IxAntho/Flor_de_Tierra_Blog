//Project Logic
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
if (window.innerWidth > 700) {
  const headerTextContainer = document.getElementById("header__text");
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
} else if (window.innerWidth < 700) {
  const headerScroller = document.querySelector(".header__images");
  headerScroller.setAttribute("data-animated", true);

  const headerInnerScroller = headerScroller.querySelector(
    ".header__inner-images"
  );
  const headerInnerScrollerContent = Array.from(headerInnerScroller.children);

  headerInnerScrollerContent.forEach((item) => {
    const headerDuplicatedItem = item.cloneNode(true);
    headerDuplicatedItem.setAttribute("aria-hidden", true); // usefull for screen reader user to not read twice all these duplicated elements
    headerInnerScroller.appendChild(headerDuplicatedItem);
  });
}

//Responsive nav bar functions
$(document).ready(function () {
  $("html").on("wheel", function (e) {
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
    $menulink = $(".nav__menu-link"),
    $menuContainer = $(".nav__menu-link-container");

  /*$menulink.click(function () {
    $menulink.toggleClass("nav_deployed");
    $menu.toggleClass("nav_deployed");
    return false;
  });*/

  function toggleMenu() {
    $menulink.toggleClass("nav_deployed");
    $menu.toggleClass("nav_deployed");

    $(".nav__menu-link").click(function () {
      if (toggled == 0) {
        $(".bar3").stop().animate({ rotate: "45", "margin-top": "13px" });
        $(".bar2").stop().animate({ opacity: "0" }, "fast");
        $(".bar1").stop().animate({ rotate: "-45", "margin-top": "13px" });
        toggled++;
        console.log("toggled down");
      } else {
        $(".bar3").stop().animate({ rotate: "+=135", "margin-top": "3px" });
        $(".bar2").animate({ opacity: "1" }, "fast");
        $(".bar1").stop().animate({ rotate: "-=135", "margin-top": "23px" });
        toggled--;
        console.log("Togged Up");
      }
    });
  }

  $menulink.click(function () {
    toggleMenu();
    return false;
  });

  var toggled = 0;

  $(".nav__link").click(function () {
    toggleMenu();
    $("#header__nav-bar").toggleClass("header__nav-bar_hidden");
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
      if (entry.isIntersecting) {
        servicesObserver.unobserve(entry.target);
      }
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
if (window.innerWidth >= 1024) {
  const colabContainer = document.getElementById("colaborations__container");
  const colabs = gsap.utils.toArray(".colaborations__colab");

  //Get start point based on viewport width
  function updateStart() {
    if (window.innerWidth >= 1024 && window.innerWidth <= 1149) {
      return "-=100";
    } else if (window.innerWidth >= 1150 && window.innerWidth <= 1231) {
      return "-=150";
    } else if (window.innerWidth >= 1231 && window.innerWidth <= 1439) {
      return "-=170";
    } else if (window.innerWidth >= 1440 && window.innerWidth <= 1800) {
      return "-=300";
    } else if (window.innerWidth > 1800) {
      return "-=350";
    }
  }

  let tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: colabContainer,
      pin: true,
      scrub: 2,
      start: updateStart(),
      end: () => "+=" + (colabContainer.offsetWidth + updateStart()),
    },
  });

  //Get the xPercent based on viewport width
  function updateXPercent() {
    if (window.innerWidth >= 1024 && window.innerWidth <= 1149) {
      return -726;
    } else if (window.innerWidth >= 1150 && window.innerWidth <= 1231) {
      return -660;
    } else if (window.innerWidth >= 1231 && window.innerWidth <= 1439) {
      return -622;
    } else if (window.innerWidth >= 1440 && window.innerWidth <= 1800) {
      return -630;
    } else if (window.innerWidth > 1800) {
      return -600;
    }
  }

  tl.to(colabContainer, {
    xPercent: updateXPercent(),
  });

  colabs.forEach((stop) => {
    tl.from(stop.querySelector(".colaborations__wrapper"), {
      yPercent: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: stop.querySelector(".colaborations__wrapper"),
        start: "left right",
        end: "center right",
        containerAnimation: tl,
        scrub: true,
      },
    });
  });

  // Adjust parameters on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      tl.scrollTrigger.end = () => "+=" + colabContainer.offsetWidth;
    }
  });
} else if (window.innerWidth <= 1023) {
  const sectionTitle = document.querySelector(".colaborations__heading");
  const colabItem = document.querySelectorAll(".colaborations__colab");

  const colabsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "colaboration_show",
          entry.isIntersecting
        );
        if (entry.isIntersecting) {
          colabsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  colabsObserver.observe(sectionTitle);
  colabItem.forEach((item) => {
    colabsObserver.observe(item);
  });
}

//Gallery dymanic background functions
// Get references to the necessary elements
if (window.innerWidth > 700) {
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
} else if (window.innerWidth < 700) {
  const galleryScroller = document.querySelector(".gallery-wrap");
  galleryScroller.setAttribute("data-animated", true);

  const galleryInnerScroller = galleryScroller.querySelector(
    ".gallery__inner-wrapper"
  );
  const galleryInnerScrollerContent = Array.from(galleryInnerScroller.children);

  console.log(galleryInnerScroller);
  console.log(galleryInnerScrollerContent);

  galleryInnerScrollerContent.forEach((item) => {
    const galleryDuplicatedItem = item.cloneNode(true);
    galleryDuplicatedItem.setAttribute("aria-hidden", true);
    galleryInnerScroller.appendChild(galleryDuplicatedItem);
  });
}

//FAQ animation logic
const faq = document.querySelectorAll(".faq__card");

const faqObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
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

//Copyright year automatic update logic
document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();
