import Square from "./classes/square.js";
import Rectangle from "./classes/rectangle.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const rect = new Rectangle(70, 40, 100, 2, 0, 1);
const square = new Square(20, 300, 200, 1, 0);

let cornerLength = 2;
let pause = false;

function start() {
  pause = false;
  window.requestAnimationFrame(gameLoop);
}

function stop() {
  pause = true;
}

function gameLoop() {
  // context erase previews frame
  context.clearRect(0, 0, canvas.width, canvas.height);

  // context draw new frame
  context.strokeRect(square.pos.x, square.pos.y, square.width, square.height);
  context.strokeRect(rect.pos.x, rect.pos.y, rect.width, rect.height);
  context.stroke();

  // update positions
  rect.updatePos();
  square.updatePos();

  // rect collisions with canvas borders
  if (rect.borderBottom.y === canvas.height || rect.borderTop.y === 0) {
    rect.vector.y *= -1;
  }

  if (rect.borderLeft.x === 0) {
    rect.vector.x === 0 ? (rect.vector.x = 1) : (rect.vector.x *= -1);
  }

  if (rect.borderRight.x === canvas.width) {
    rect.vector.x === 0 ? (rect.vector.x = -1) : (rect.vector.x *= -1);
  }

  // square collisions with canvas borders
  if (square.borderBottom.y === canvas.height || square.borderTop.y === 0) {
    square.vector.y *= -1;
  }

  if (square.borderLeft.x === 0) {
    square.vector.x === 0 ? (square.vector.x = 1) : (square.vector.x *= -1);
  }

  if (square.borderRight.x === canvas.width) {
    square.vector.x === 0 ? (square.vector.x = -1) : (square.vector.x *= -1);
  }

  // corner collision
  let C1 =
    rect.borderTop.y === square.borderBottom.y &&
    Math.abs(rect.borderLeft.x - square.borderRight.x) <= cornerLength;
  let C2 =
    rect.borderTop.y === square.borderBottom.y &&
    Math.abs(square.borderLeft.x - rect.borderRight.x) <= cornerLength;
  let C3 =
    rect.borderBottom.y === square.borderTop.y &&
    Math.abs(rect.borderLeft.x - square.borderRight.x) <= cornerLength;
  let C4 =
    rect.borderBottom.y === square.borderTop.y &&
    Math.abs(square.borderLeft.x - rect.borderRight.x) <= cornerLength;
  let C5 =
    rect.borderLeft.x === square.borderRight.x &&
    Math.abs(square.borderBottom.y - rect.borderTop.y) <= cornerLength;
  let C6 =
    rect.borderRight.x === square.borderLeft.x &&
    Math.abs(square.borderBottom.y - rect.borderTop.y) <= cornerLength;
  let C7 =
    rect.borderLeft.x === square.borderRight.x &&
    Math.abs(rect.borderBottom.y - square.borderTop.y) <= cornerLength;
  let C8 =
    rect.borderRight.x === square.borderLeft.x &&
    Math.abs(rect.borderBottom.y - square.borderTop.y) <= cornerLength;

  if (C1 || C2 || C3 || C4 || C5 || C6 || C7 || C8) {
    if (rect.vector.y === 0) rect.vector.y = square.vector.y;
    else rect.vector.y *= -1;

    if (rect.vector.x === 0) rect.vector.x = square.vector.x;
    else rect.vector.x *= -1;

    if (square.vector.y === 0) square.vector.y = rect.vector.y;
    else square.vector.y *= -1;

    if (square.vector.x === 0) square.vector.x = rect.vector.x;
    else square.vector.x *= -1;
  } else {
    // Object collisions on Y axis
    if (rect.borderTop.y === square.borderBottom.y) {
      if (
        rect.borderRight.x >= square.borderLeft.x &&
        rect.borderLeft.x <= square.borderRight.x
      ) {
        rect.vector.y = -1 * rect.vector.y;
        if (square.vector.y === 0) {
          square.vector.y = -1;
        } else {
          square.vector.y *= -1;
        }
      }
    }

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

  pause ? null : window.requestAnimationFrame(gameLoop);
}

export { start, stop };
