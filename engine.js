import Rectangle from "./classes/rectangle.js";
import { paused } from "./handlers/handlePauseResume.js";
import handleDrawing from "./handlers/handleDrawing.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 4;
const rect = new Rectangle(100, 100, 0, 0, speed, speed);

export function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  handleDrawing(rect, context);
  rect.updatePos();
  rect.checkCanvasCollisions(canvas);

  paused ? null : window.requestAnimationFrame(gameLoop);
}
