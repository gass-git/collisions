import Rectangle from "./classes/rectangle.js";
import handleCanvasCollisions from "./handlers/handleCanvasCollisions.js";
import { paused } from "./handlers/handlePauseResume.js";
import {
  handleCornerCollisions,
  cornerCollision,
} from "./handlers/handleCornerCollisions.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 2;
const rect = new Rectangle(100, 100, 0, 0, speed, speed);
const red = `rgb(255,160,122)`;

export function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.strokeRect(rect.pos.x, rect.pos.y, rect.width, rect.height);
  if (rect.collisionBody.inCollision.cornerArea.topLeft) {
    context.fillStyle = red;
    context.fillRect(
      rect.collisionBody.cornerArea.top.left.x1,
      rect.collisionBody.cornerArea.top.left.y1,
      rect.collisionBody.cornerDelta,
      rect.collisionBody.cornerDelta
    );
  }
  context.strokeRect(
    rect.collisionBody.cornerArea.top.left.x1,
    rect.collisionBody.cornerArea.top.left.y1,
    rect.collisionBody.cornerDelta,
    rect.collisionBody.cornerDelta
  );
  if (rect.collisionBody.inCollision.cornerArea.topRight) {
    context.fillStyle = red;
    context.fillRect(
      rect.collisionBody.cornerArea.top.right.x1,
      rect.collisionBody.cornerArea.top.right.y1,
      rect.collisionBody.cornerDelta,
      rect.collisionBody.cornerDelta
    );
  }
  context.strokeRect(
    rect.collisionBody.cornerArea.top.right.x1,
    rect.collisionBody.cornerArea.top.right.y1,
    rect.collisionBody.cornerDelta,
    rect.collisionBody.cornerDelta
  );
  context.strokeRect(
    rect.collisionBody.cornerArea.bottom.left.x1,
    rect.collisionBody.cornerArea.bottom.left.y1,
    rect.collisionBody.cornerDelta,
    rect.collisionBody.cornerDelta
  );
  if (rect.collisionBody.inCollision.cornerArea.bottomLeft) {
    context.fillStyle = red;
    context.fillRect(
      rect.collisionBody.cornerArea.bottom.left.x1,
      rect.collisionBody.cornerArea.bottom.left.y1,
      rect.collisionBody.cornerDelta,
      rect.collisionBody.cornerDelta
    );
  }
  if (rect.collisionBody.inCollision.cornerArea.bottomRight) {
    context.fillStyle = red;
    context.fillRect(
      rect.collisionBody.cornerArea.bottom.right.x1,
      rect.collisionBody.cornerArea.bottom.right.y1,
      rect.collisionBody.cornerDelta,
      rect.collisionBody.cornerDelta
    );
  }
  context.strokeRect(
    rect.collisionBody.cornerArea.bottom.right.x1,
    rect.collisionBody.cornerArea.bottom.right.y1,
    rect.collisionBody.cornerDelta,
    rect.collisionBody.cornerDelta
  );
  if (rect.collisionBody.inCollision.borderArea.top) {
    context.fillStyle = "yellow";
    context.fillRect(
      rect.collisionBody.borderArea.top.x1,
      rect.collisionBody.borderArea.top.y1,
      rect.collisionBody.borderArea.top.width,
      rect.collisionBody.borderArea.top.height
    );
  }
  context.strokeRect(
    rect.collisionBody.borderArea.top.x1,
    rect.collisionBody.borderArea.top.y1,
    rect.collisionBody.borderArea.top.width,
    rect.collisionBody.borderArea.top.height
  );
  if (rect.collisionBody.inCollision.borderArea.right) {
    context.fillStyle = "yellow";
    context.fillRect(
      rect.collisionBody.borderArea.right.x1,
      rect.collisionBody.borderArea.right.y1,
      rect.collisionBody.borderArea.right.width,
      rect.collisionBody.borderArea.right.height
    );
  }
  context.strokeRect(
    rect.collisionBody.borderArea.right.x1,
    rect.collisionBody.borderArea.right.y1,
    rect.collisionBody.borderArea.right.width,
    rect.collisionBody.borderArea.right.height
  );
  context.strokeRect(
    rect.collisionBody.borderArea.bottom.x1,
    rect.collisionBody.borderArea.bottom.y1,
    rect.collisionBody.borderArea.bottom.width,
    rect.collisionBody.borderArea.bottom.height
  );
  if (rect.collisionBody.inCollision.borderArea.left) {
    context.fillStyle = "yellow";
    context.fillRect(
      rect.collisionBody.borderArea.left.x1,
      rect.collisionBody.borderArea.left.y1,
      rect.collisionBody.borderArea.left.width,
      rect.collisionBody.borderArea.left.height
    );
  }
  context.strokeRect(
    rect.collisionBody.borderArea.left.x1,
    rect.collisionBody.borderArea.left.y1,
    rect.collisionBody.borderArea.left.width,
    rect.collisionBody.borderArea.left.height
  );
  if (rect.collisionBody.inCollision.borderArea.bottom) {
    context.fillStyle = "yellow";
    context.fillRect(
      rect.collisionBody.borderArea.bottom.x1,
      rect.collisionBody.borderArea.bottom.y1,
      rect.collisionBody.borderArea.bottom.width,
      rect.collisionBody.borderArea.bottom.height
    );
  }

  rect.updatePos();
  rect.checkCanvasCollisions(canvas);

  paused ? null : window.requestAnimationFrame(gameLoop);
}
