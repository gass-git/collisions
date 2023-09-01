import Square from "./classes/square.js";
import Rectangle from "./classes/rectangle.js";
import handleCanvasCollisions from "./handlers/handleCanvasCollisions.js";
import { paused } from "./handlers/handlePauseResume.js";
import handleSideCollisions from "./handlers/handleSideCollisions.js";

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

  // conditions for corner collisions

  const inTopLeftCorner =
    (rect.borderTop.y === square.borderBottom.y &&
      Math.abs(rect.borderLeft.x - square.borderRight.x) <= cornerLength) ||
    (rect.borderLeft.x === square.borderRight.x &&
      Math.abs(rect.borderTop.y - square.borderBottom.y) <= cornerLength);

  const inTopRightCorner =
    (rect.borderTop.y === square.borderBottom.y &&
      Math.abs(rect.borderRight.x - square.borderLeft.x) <= cornerLength) ||
    (rect.borderRight.x === square.borderLeft.x &&
      Math.abs(rect.borderTop.y - square.borderBottom.y) <= cornerLength);

  const inBottomLeftCorner =
    (rect.borderBottom.y === square.borderTop.y &&
      Math.abs(rect.borderLeft.x - square.borderRight.x) <= cornerLength) ||
    (rect.borderLeft.x === square.borderRight.x &&
      Math.abs(rect.borderBottom.y - square.borderTop.y) <= cornerLength);

  const inBottomRightCorner =
    (rect.borderBottom.y === square.borderTop.y &&
      Math.abs(rect.borderRight.x - square.borderLeft.x) <= cornerLength) ||
    (rect.borderRight.x === square.borderLeft.x &&
      Math.abs(rect.borderBottom.y - square.borderTop.y) <= cornerLength);

  const C = [
    inTopLeftCorner,
    inTopLeftCorner,
    inBottomLeftCorner,
    inBottomRightCorner,
  ];

  if (C[0] || C[1] || C[2] || C[3]) {
    if (rect.vector.y === 0) rect.vector.y = square.vector.y;
    else rect.vector.y *= -1;

    if (rect.vector.x === 0) rect.vector.x = square.vector.x;
    else rect.vector.x *= -1;

    if (square.vector.y === 0) square.vector.y = rect.vector.y;
    else square.vector.y *= -1;

    if (square.vector.x === 0) square.vector.x = rect.vector.x;
    else square.vector.x *= -1;
  } else {
    handleSideCollisions(square, rect);
    handleSideCollisions(rect, square);
  }

  paused ? null : window.requestAnimationFrame(gameLoop);
}
