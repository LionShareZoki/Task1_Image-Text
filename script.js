const button = document.querySelector(".toggle-button");
const paragraph = document.querySelector(".hidden-text");

button.addEventListener("click", function () {
  button.style.display = "none";
  paragraph.classList.add("visible");
});
