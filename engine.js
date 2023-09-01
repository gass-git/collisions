import Square from "./classes/square.js";
import Rectangle from "./classes/rectangle.js";
import handleCanvasCollisions from "./handlers/handleCanvasCollisions.js";
import { paused } from "./handlers/handlePauseResume.js";
import handleSideCollisions from "./handlers/handleSideCollisions.js";
import {
  cornerCollision,
  handleCornerCollisions,
} from "./handlers/handleCornerCollisions.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const rect = new Rectangle(70, 40, 100, 2, 0, 1);
const square = new Square(20, 300, 200, 1, 0);
const objects = [rect, square];
const cornerLength = 2;

export function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  objects.forEach((obj) => {
    context.strokeRect(obj.pos.x, obj.pos.y, obj.width, obj.height);
    obj.updatePos();
    handleCanvasCollisions(obj);
  });

  if (cornerCollision(rect, square, cornerLength)) {
    handleCornerCollisions(rect, square);
  } else {
    handleSideCollisions(square, rect);
    handleSideCollisions(rect, square);
  }
  paused ? null : window.requestAnimationFrame(gameLoop);
}
