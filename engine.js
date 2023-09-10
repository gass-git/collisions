import Rectangle from "./classes/rectangle.js";
import handleCanvasCollisions from "./handlers/handleCanvasCollisions.js";
import { paused } from "./handlers/handlePauseResume.js";
import {
  handleCornerCollisions,
  cornerCollision,
} from "./handlers/handleCornerCollisions.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 1;
const rect = new Rectangle(50, 50, 0, 0, speed, speed);

export function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.strokeRect(rect.pos.x, rect.pos.y, rect.width, rect.height);
  context.strokeRect(
    rect.collisionBody.cornerArea.top.left.x1,
    rect.collisionBody.cornerArea.top.left.y1,
    rect.collisionBody.cornerDelta,
    rect.collisionBody.cornerDelta
  );
  rect.updatePos();

  handleCanvasCollisions(rect);

  paused ? null : window.requestAnimationFrame(gameLoop);
}
