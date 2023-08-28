import Square from "./classes/square.js";
import Rectangle from "./classes/rectangle.js";
import handleCanvasCollisions from "./handlers/handleCanvasCollisions.js";
import { paused } from "./handlers/handlePauseResume.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const rect = new Rectangle(70, 40, 100, 2, 0, 1);
const square = new Square(20, 300, 200, 1, 0);
const cornerLength = 2;

export function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeRect(square.pos.x, square.pos.y, square.width, square.height);
  context.strokeRect(rect.pos.x, rect.pos.y, rect.width, rect.height);
  context.stroke();

  rect.updatePos();
  square.updatePos();

  handleCanvasCollisions(rect);
  handleCanvasCollisions(square);

  // conditions for corner collisions
  const C = [
    rect.borderTop.y === square.borderBottom.y &&
      Math.abs(rect.borderLeft.x - square.borderRight.x) <= cornerLength,
    rect.borderTop.y === square.borderBottom.y &&
      Math.abs(square.borderLeft.x - rect.borderRight.x) <= cornerLength,
    rect.borderBottom.y === square.borderTop.y &&
      Math.abs(rect.borderLeft.x - square.borderRight.x) <= cornerLength,
    rect.borderBottom.y === square.borderTop.y &&
      Math.abs(square.borderLeft.x - rect.borderRight.x) <= cornerLength,
    rect.borderLeft.x === square.borderRight.x &&
      Math.abs(square.borderBottom.y - rect.borderTop.y) <= cornerLength,
    rect.borderRight.x === square.borderLeft.x &&
      Math.abs(square.borderBottom.y - rect.borderTop.y) <= cornerLength,
    rect.borderLeft.x === square.borderRight.x &&
      Math.abs(rect.borderBottom.y - square.borderTop.y) <= cornerLength,
    rect.borderRight.x === square.borderLeft.x &&
      Math.abs(rect.borderBottom.y - square.borderTop.y) <= cornerLength,
  ];

  if (C[0] || C[1] || C[2] || C[3] || C[4] || C[5] || C[6] || C[7]) {
    if (rect.vector.y === 0) rect.vector.y = square.vector.y;
    else rect.vector.y *= -1;

    if (rect.vector.x === 0) rect.vector.x = square.vector.x;
    else rect.vector.x *= -1;

    if (square.vector.y === 0) square.vector.y = rect.vector.y;
    else square.vector.y *= -1;

    if (square.vector.x === 0) square.vector.x = rect.vector.x;
    else square.vector.x *= -1;
  } else {
    rect.detectCollision("top", square);
    square.detectCollision("bottom", rect);

    if (rect.borderBottom.y === square.borderTop.y) {
      if (
        rect.borderRight.x >= square.borderLeft.x &&
        rect.borderLeft.x <= square.borderRight.x
      ) {
        rect.vector.y *= -1;
        if (square.vector.y === 0) {
          square.vector.y = 1;
        } else {
          square.vector.y = -1 * square.vector.y;
        }
      }
    }

    if (square.borderRight.x === rect.borderLeft.x) {
      if (
        rect.borderTop.y <= square.borderBottom.y &&
        rect.borderBottom.y >= square.borderTop.y
      ) {
        square.vector.x *= -1;
        if (rect.vector.x === 0) {
          rect.vector.x = 1;
        } else {
          rect.vector.x = -1 * rect.vector.x;
        }
      }
    }

    if (rect.borderRight.x === square.borderLeft.x) {
      if (
        rect.borderTop.y <= square.borderBottom.y &&
        rect.borderBottom.y >= square.borderTop.y
      ) {
        square.vector.x *= -1;
        if (rect.vector.x === 0) {
          rect.vector.x = -1;
        } else {
          rect.vector.x = -1 * rect.vector.x;
        }
      }
    }
  }

  paused ? null : window.requestAnimationFrame(gameLoop);
}
