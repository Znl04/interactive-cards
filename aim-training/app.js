const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEl = document.querySelector('#time');
const board = document.querySelector("#board");
const colors = ["#66CDAA", "#20B2AA", "#008B8B", "#008080", "#00FFFF", "#AFEEEE", "#98FB98", "#90EE90"];
let time = 20;
let score = 0;

startBtn.addEventListener('click', (e) => { 
  e.prevetnDefault
  screens[0].classList.add("up");
});

timeList.addEventListener('click', (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = +e.target.getAttribute("data-time");
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener('click', (e) => {
  if (e.target.classList.contains('circle')) {
    score++;
    e.target.remove()
    createRandomCircle()
  }
})

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}
function finishGame() {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Ваш счет <span class="primary">${score}</span></h1>`
}

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    } 
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(20, 60);
  const {width, height} = board.getBoundingClientRect()
  const color = colors[getRandomNumber(0, colors.length - 1)]
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);

  circle.classList.add("circle");

  console.log(color);

  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  circle.style.background = `${color}`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}