const button = document.querySelector(".toggle-button");
const paragraph = document.querySelector(".hidden-text");
const rectangle = document.querySelector(".rectangle");

button.addEventListener("click", function () {
  button.style.display = "none";
  paragraph.classList.add("visible");
  rectangle.classList.add("visible");
});
