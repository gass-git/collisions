import { gameLoop } from "./../engine.js";

// TODO: add a restart button when game starts

let paused = true;
let btn = document.getElementById("btn-id");

function handlePauseResume() {
  if (paused) {
    paused = false;
    window.requestAnimationFrame(gameLoop);
    btn.value = "pause";
  } else {
    paused = true;
    btn.value = "resume";
  }
}

export { handlePauseResume, paused };
