import { paused } from "./handlers/pauseResume.js";
import handleDrawing from "./handlers/drawing.js";
import { handleAllCollisions } from "./handlers/collisions.js";
import { updatePos } from "./handlers/positioning.js";
import { create } from "./composables/factory.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 2;
const objects = create(10, speed);

export function gameLoop() {
  handleDrawing(objects, context);
  updatePos(objects);
  handleAllCollisions(objects, speed, canvas);

  paused ? null : window.requestAnimationFrame(gameLoop);
}
