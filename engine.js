import Rectangle from "./classes/rectangle.js";
import { paused } from "./handlers/handlePauseResume.js";
import handleDrawing from "./handlers/handleDrawing.js";
import { handleCanvasCollisions } from "./handlers/handleCollisions.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 3;
const rect1 = new Rectangle(100, 100, 202, 100, speed / 3, speed);
const rect2 = new Rectangle(100, 100, 250, 290, 0, speed / 2);

const objects = [rect1, rect2];

export function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  handleDrawing(objects, context);

  rect1.updatePos();
  rect2.updatePos();

  handleCanvasCollisions(objects, canvas);

  rect1.checkObjectsCollisions(rect2, speed);
  rect2.checkObjectsCollisions(rect1, speed);

  paused ? null : window.requestAnimationFrame(gameLoop);
}
