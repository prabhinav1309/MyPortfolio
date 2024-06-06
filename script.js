const projectIcons = document.querySelectorAll(".project-icon");

projectIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const project = icon.parentElement;
    const description = project.querySelector("p");
    description.classList.toggle("show"); // Toggle visibility of description
  });
});

