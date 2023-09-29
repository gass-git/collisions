import { handlePauseResume } from "./handlers/pauseResume.js";

document
  .getElementById("start-btn")
  .addEventListener("click", handlePauseResume);
