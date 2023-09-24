import Rectangle from "./classes/rectangle.js";
import { paused } from "./handlers/handlePauseResume.js";
import handleDrawing from "./handlers/handleDrawing.js";
import {
  handleCanvasCollisions,
  handleObjectsCollisions,
} from "./handlers/handleCollisions.js";
import { updatePos } from "./handlers/handlePositioning.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 3;
const rect1 = new Rectangle(100, 100, 202, 100, speed / 3, speed);
const rect2 = new Rectangle(100, 100, 250, 290, 0, speed / 2);
const rect3 = new Rectangle(100, 100, 50, 90, 0, speed / 2);

const objects = [rect1, rect2, rect3];

export function gameLoop() {
  handleDrawing(objects, context);
  updatePos(objects);
  handleCanvasCollisions(objects, canvas);
  handleObjectsCollisions(objects, speed);

  paused ? null : window.requestAnimationFrame(gameLoop);
}
