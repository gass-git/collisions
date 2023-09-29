import { paused } from "./handlers/handlePauseResume.js";
import handleDrawing from "./handlers/handleDrawing.js";
import {
  handleCanvasCollisions,
  handleObjectsCollisions,
} from "./handlers/handleCollisions.js";
import { updatePos } from "./handlers/handlePositioning.js";
import { factory } from "./composables/factory.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 2;
const objects = factory(10, speed);

export function gameLoop() {
  handleDrawing(objects, context);
  updatePos(objects);
  handleCanvasCollisions(objects, canvas);
  handleObjectsCollisions(objects, speed);

  paused ? null : window.requestAnimationFrame(gameLoop);
}
