const projectIcons = document.querySelectorAll(".project-icon");

projectIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const project = icon.parentElement;
    const description = project.querySelector("p");
    description.classList.toggle("show"); // Toggle visibility of description
  });
});

// Select the element with the typing effect
const typingEffectElement = document.querySelector(".typing-effect");

// Function to reset the animation
const resetTypingEffect = () => {
  typingEffectElement.style.animation = "none"; // Remove the animation
  typingEffectElement.offsetHeight; // Trigger a reflow
  typingEffectElement.style.animation = null; // Reapply the animation
};

// Set an interval to reset the animation every 3 seconds (adjust as needed)
setInterval(resetTypingEffect, 3000);
