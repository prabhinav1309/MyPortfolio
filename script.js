// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Select the element with the typing effect
const typingEffectElement = document.querySelector(".text-two");

// Function to reset the animation
const resetTypingEffect = () => {
  typingEffectElement.style.animation = "none"; // Remove the animation
  typingEffectElement.offsetHeight; // Trigger a reflow
  typingEffectElement.style.animation = null; // Reapply the animation
};

// Set an interval to reset the animation every 3 seconds (adjust as needed)
setInterval(resetTypingEffect, 3000);

//FORM

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyW1LIH0nol9Msyu23GX0tbJdSq3Wmcm9YabCaTXfAGOPwWTsxP05V2BoM7VjFt454ujA/exec";
const form = document.forms["contact-form"];
const spinner = document.getElementById("spinner");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  spinner.style.display = "inline-block"; // Show the spinner

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      spinner.style.display = "none"; // Hide the spinner
      if (response.ok) {
        alert("Thank you! Your form has been submitted successfully.");
        form.reset(); // Clear the form fields
      } else {
        alert(
          "Sorry, there was a problem with your submission. Please try again."
        );
      }
    })
    .catch((error) => {
      spinner.style.display = "none"; // Hide the spinner
      console.error("Error!", error.message);
      alert("Sorry, there was an error. Please try again later.");
    });
});

// Dark mode toggle functionality
const toggleButton = document.getElementById("dark-mode-toggle");
const bodys = document.body;

// Function to update the icon
function updateIcon() {
  const icon = toggleButton.querySelector("i");
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Load user's dark mode preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  bodys.classList.add("dark-mode");
  updateIcon();
}

toggleButton.addEventListener("click", () => {
  bodys.classList.toggle("dark-mode");
  updateIcon();

  // Save the user's preference to localStorage
  if (bodys.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.removeItem("darkMode");
  }
});
