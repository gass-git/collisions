import { gameLoop } from "./../engine.js";

let paused = true;
let restartBtnInserted = false;
let startBtn = document.getElementById("start-btn");
let restartBtn = document.createElement("BUTTON");

function handlePauseResume() {
  if (paused) {
    paused = false;
    window.requestAnimationFrame(gameLoop);
    startBtn.value = "pause";

    if (!restartBtnInserted) {
      insertRestartBtn();
      restartBtnInserted = true;
    }
  } else {
    paused = true;
    startBtn.value = "resume";
    startBtn.append();
  }
}

function insertRestartBtn() {
  restartBtn.appendChild(document.createTextNode("restart"));
  restartBtn.id = "restart-btn";
  restartBtn.addEventListener("click", () => location.reload());
  startBtn.insertAdjacentElement("afterend", restartBtn);
}

export { handlePauseResume, paused };
