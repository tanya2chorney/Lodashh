// Завдання 1
const input = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

function valueSlider() {
  const valueInput = input.value;
  sliderImage.width = valueInput * 4;
  sliderImage.height = valueInput * 4;
}
input.addEventListener("input", _.debounce(valueSlider, 500));

// Завдання 2
const box = document.getElementById("box");
document.addEventListener(
  "mousemove",
  _.debounce(function (event) {
    box.style.top = event.clientY + "px";
    box.style.left = event.clientX + "px";
  }, 100)
);
