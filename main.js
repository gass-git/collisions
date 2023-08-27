import { start, stop } from "./engine.js";

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
