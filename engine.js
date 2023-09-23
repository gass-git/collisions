import Rectangle from "./classes/rectangle.js";
import { paused } from "./handlers/handlePauseResume.js";
import handleDrawing from "./handlers/handleDrawing.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 1;
const rectOne = new Rectangle(100, 100, 202, 100, 0, speed);
const rectTwo = new Rectangle(100, 100, 250, 290, 0, 0);

export function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  handleDrawing(rectOne, context);
  handleDrawing(rectTwo, context);
  rectOne.updatePos();
  rectOne.checkCanvasCollisions(canvas);
  rectTwo.updatePos();
  rectTwo.checkCanvasCollisions(canvas);

  rectOne.checkObjectsCollisions(rectTwo, speed);
  rectTwo.checkObjectsCollisions(rectOne, speed);

  paused ? null : window.requestAnimationFrame(gameLoop);
}
