import Square from "./classes/square.js";
import Rectangle from "./classes/rectangle.js";
import handleCanvasCollisions from "./handlers/handleCanvasCollisions.js";
import { paused } from "./handlers/handlePauseResume.js";
import handleSideCollisions from "./handlers/handleSideCollisions.js";
import {
  cornerCollision,
  handleCornerCollisions,
} from "./handlers/handleCornerCollisions.js";

/** TODO - fix
 * bug: collisions don't work properly when the speed is a decimal number
 * or bigger than 2
 */

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 1.8;
const rect = new Rectangle(70, 40, 100, 2, 0, speed);
const square = new Square(20, 300, 200, speed, 0);
const objects = [rect, square];
const cornerLength = 2;

export function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  objects.forEach((obj) => {
    context.strokeRect(obj.pos.x, obj.pos.y, obj.width, obj.height);
    obj.updatePos();
    handleCanvasCollisions(obj, speed);
  });

  if (cornerCollision(rect, square, cornerLength)) {
    handleCornerCollisions(rect, square, speed);
  } else {
    handleSideCollisions(square, rect, speed);
    handleSideCollisions(rect, square, speed);
  }
  paused ? null : window.requestAnimationFrame(gameLoop);
}
