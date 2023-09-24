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
const rect1 = new Rectangle(25, 25, 200, 10, -speed, speed);
const rect2 = new Rectangle(25, 25, 100, 103, 0, 0);

const rect3 = new Rectangle(25, 25, 90, 90, 0, speed);
const rect4 = new Rectangle(25, 25, 120, 100, speed, speed);
const rect5 = new Rectangle(25, 25, 150, 290, 0, speed);
const rect6 = new Rectangle(25, 25, 180, 90, 0, speed);
const rect7 = new Rectangle(25, 25, 210, 100, speed, speed);
const rect8 = new Rectangle(25, 25, 240, 290, 0, speed);
const rect9 = new Rectangle(25, 25, 280, 90, 0, speed);
const rect10 = new Rectangle(25, 25, 110, 200, speed, speed);
const rect11 = new Rectangle(25, 25, 140, 190, 0, speed);
const rect12 = new Rectangle(25, 25, 250, 0, 0, speed);

const objects = [rect1, rect2, rect3, rect4, rect5, rect6, rect7];

export function gameLoop() {
  handleDrawing(objects, context);
  updatePos(objects);
  handleCanvasCollisions(objects, canvas);
  handleObjectsCollisions(objects, speed);

  paused ? null : window.requestAnimationFrame(gameLoop);
}
