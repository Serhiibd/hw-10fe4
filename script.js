const startFirst = document.querySelector(".start-first");
const startSecond = document.querySelector(".start-second");
const startThird = document.querySelector(".start-third");
const startFourth = document.querySelector(".start-fourth");

const wrapAll = document.querySelector(".wrap-all");

// 1

const firstContainer = document.querySelector(".first_container");

let count = 0;

startFirst.addEventListener("click", () => {
  const firstInter = setInterval(() => {
    count++;
    firstContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="message">
            <p class="message-text">${count}</p>
        </div>`
    );

    if (count === 5) {
      clearInterval(firstInter);
    }
  }, 1000);
});

// 2

const secondElements = document.querySelectorAll(".animation-element");

startSecond.addEventListener("click", () => {
  secondElements.forEach((el) => {
    el.style.display = "inline-block";
  });

  let angle = 0;
  setInterval(() => {
    angle += 5;
    secondElements[0].style.transform = `rotate(${angle}deg)`;
  }, 50);

  let grow = true;
  let size = 60;
  setInterval(() => {
    if (grow) size += 2;
    else size -= 2;

    if (size >= 90) grow = false;
    if (size <= 60) grow = true;

    secondElements[1].style.width = size + "px";
    secondElements[1].style.height = size + "px";
  }, 70);

  let pos = 0;
  let dir = 1;
  setInterval(() => {
    pos += dir * 3;

    if (pos >= 100) dir = -1;
    if (pos <= 0) dir = 1;

    secondElements[2].style.left = pos + "px";
  }, 40);
});

// 3

const gameArea = document.querySelector(".game-area");
const target = document.querySelector(".target");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const scoreBox = document.querySelector(".score-box");

let score = 0;
let time = 10;
let gameInterval;
let moveInterval;

startThird.addEventListener("click", () => {
  scoreBox.style.display = "block";
  gameArea.style.display = "block";
  gameArea.style.pointerEvents = "auto";

  score = 0;
  time = 10;
  scoreEl.textContent = score;
  timeEl.textContent = time;

  target.style.display = "block";

  function moveTarget() {
    const x = Math.random() * 360;
    const y = Math.random() * 260;
    target.style.left = x + "px";
    target.style.top = y + "px";
  }

  target.onclick = () => {
    score++;
    scoreEl.textContent = score;
    moveTarget();
  };

  moveInterval = setInterval(moveTarget, 1000);

  gameInterval = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
      clearInterval(moveInterval);
      clearInterval(gameInterval);
      target.style.display = "none";
      alert("Гру завершено! Ваші очки: " + score);
    }
  }, 1000);
});

// 4

const timeWrap = document.querySelector(".time-wrap");
const timeInput = document.querySelector(".time-input");
const timeStart = document.querySelector(".time-start");
const timeLeft = document.querySelector(".time-left");

startFourth.addEventListener("click", () => {
  timeWrap.style.display = "block";
});

timeStart.addEventListener("click", () => {
  let secLenght = Number(timeInput.value);
  timeLeft.textContent = secLenght;

  const timer = setInterval(() => {
    secLenght -= 1;
    timeLeft.textContent = secLenght;

    if (secLenght <= 0) {
      const finish = new Audio("alarm.mp3");
      finish.play();

      clearInterval(timer);
      timeWrap.insertAdjacentHTML(
        "beforeend",
        `<p style="font-size: 32px;">Таймер завершенно!</p>`
      );
    }
  }, 1000);
});
