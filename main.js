import { handlePauseResume } from "./handlers/handlePauseResume.js";

document
  .getElementById("start-btn")
  .addEventListener("click", handlePauseResume);
