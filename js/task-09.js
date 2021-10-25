function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBodyColor = document.querySelector("body");

console.log(changeBodyColor.style.backgroundColor);
