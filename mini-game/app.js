const board = document.querySelector("#board");
const colors = ["#af4425", "#662e1c", "#ebdcb2", "#c9a66b", "#ba5536", "#693d3d", "#46211a"];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add("square");

  square.addEventListener("mouseover", setColor)
  square.addEventListener("mouseleave", removeColor)

  board.append(square);
}

function setColor(e) {
  element = e.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
  element = e.target;
  element.style.backgroundColor = "#1d1d1d"
  element.style.boxShadow = `0 0 2px #1d1d1d`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}