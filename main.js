let work = document.querySelector(".work");
let relax = document.querySelector(".relax");

let workTime = 25;
let relaxTime = 5;
let seconds = "00";
let isPaused = false;

window.onload = () => {
  document.querySelector(".min").innerHTML = workTime;
  document.querySelector(".sec").innerHTML = seconds;

  work.classList.add("active");

  let buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((but) => but.classList.remove("active"));
      button.classList.add("active");
    });
  });
};

function start() {
  document.querySelector("#start").style.display = "none";
  document.querySelector("#reset").style.display = "inline";

  seconds = 59;

  let workMinutes = workTime - 1;
  let relaxMinutes = relaxTime - 1;

  breakCount = 0;

  let timeFunction = () => {
    
    if (!isPaused) {
      document.querySelector(".min").innerHTML = workMinutes;
      document.querySelector(".sec").innerHTML = seconds;
      /* let buttons = document.querySelectorAll(".btn");
      buttons.forEach((button) => {
        if (button.classList.contains("active")) {
          if (!button.classList.contains("relax")) {
            document.querySelector(".min").innerHTML = workMinutes;
          } else {
            document.querySelector(".min").innerHTML = relaxMinutes;
          }
        }
      }); */

      seconds = seconds - 1;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (parseInt(seconds) === 0) {
        workMinutes -= 1;
        if (workMinutes === -1) {
          if (breakCount % 2 === 0) {
            workMinutes = relaxMinutes;
            breakCount += 1;

            work.classList.remove("active");
            relax.classList.add("active");
          } else {
            workMinutes = workTime;
            breakCount += 1;

            relax.classList.remove("active");
            work.classList.add("active");
          }
        }
        seconds = 59;
      }
    }
  };

  setInterval(timeFunction, 1000);
}

document.querySelector("#pause").addEventListener("click", function () {
  if (!isPaused) {
    isPaused = true;
  } else {
    isPaused = false;
  }
});
