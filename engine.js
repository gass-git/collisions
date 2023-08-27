import Square from "./classes/square.js";
import Rectangle from "./classes/rectangle.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const rectangle = new Rectangle(70, 40, 100, 2, 0, 1);
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
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeRect(square.pos.x, square.pos.y, square.width, square.height);
  context.strokeRect(
    rectangle.pos.x,
    rectangle.pos.y,
    rectangle.width,
    rectangle.height
  );
  context.stroke();

  // update positions
  rectangle.updatePos();
  square.updatePos();

  // rectangle collisions with canvas borders
  if (
    rectangle.borderBottom.y === canvas.height ||
    rectangle.borderTop.y === 0
  ) {
    rectangle.vector.y *= -1;
  }

  if (rectangle.borderLeft.x === 0) {
    if (rectangle.vector.x === 0) {
      rectangle.vector.x = 1;
    } else {
      rectangle.vector.x *= -1;
    }
  }

  if (rectangle.borderRight.x === canvas.width) {
    if (rectangle.vector.x === 0) {
      rectangle.vector.x = -1;
    } else {
      rectangle.vector.x *= -1;
    }
  }

  // square collisions with canvas borders
  if (square.borderBottom.y === canvas.height || square.borderTop.y === 0) {
    square.vector.y *= -1;
  }

  if (square.borderLeft.x === 0) {
    if (square.vector.x === 0) {
      square.vector.x = 1;
    } else {
      square.vector.x *= -1;
    }
  }

  if (square.borderRight.x === canvas.width) {
    if (square.vector.x === 0) {
      square.vector.x = -1;
    } else {
      square.vector.x *= -1;
    }
  }

  // corner collision
  let C1 =
    rectangle.borderTop.y === square.borderBottom.y &&
    Math.abs(rectangle.borderLeft.x - square.borderRight.x) <= cornerLength;
  let C2 =
    rectangle.borderTop.y === square.borderBottom.y &&
    Math.abs(square.borderLeft.x - rectangle.borderRight.x) <= cornerLength;
  let C3 =
    rectangle.borderBottom.y === square.borderTop.y &&
    Math.abs(rectangle.borderLeft.x - square.borderRight.x) <= cornerLength;
  let C4 =
    rectangle.borderBottom.y === square.borderTop.y &&
    Math.abs(square.borderLeft.x - rectangle.borderRight.x) <= cornerLength;
  let C5 =
    rectangle.borderLeft.x === square.borderRight.x &&
    Math.abs(square.borderBottom.y - rectangle.borderTop.y) <= cornerLength;
  let C6 =
    rectangle.borderRight.x === square.borderLeft.x &&
    Math.abs(square.borderBottom.y - rectangle.borderTop.y) <= cornerLength;
  let C7 =
    rectangle.borderLeft.x === square.borderRight.x &&
    Math.abs(rectangle.borderBottom.y - square.borderTop.y) <= cornerLength;
  let C8 =
    rectangle.borderRight.x === square.borderLeft.x &&
    Math.abs(rectangle.borderBottom.y - square.borderTop.y) <= cornerLength;

  if (C1 || C2 || C3 || C4 || C5 || C6 || C7 || C8) {
    if (rectangle.vector.y === 0) rectangle.vector.y = square.vector.y;
    else rectangle.vector.y *= -1;

    if (rectangle.vector.x === 0) rectangle.vector.x = square.vector.x;
    else rectangle.vector.x *= -1;

    if (square.vector.y === 0) square.vector.y = rectangle.vector.y;
    else square.vector.y *= -1;

    if (square.vector.x === 0) square.vector.x = rectangle.vector.x;
    else square.vector.x *= -1;
  } else {
    // Object collisions on Y axis
    if (rectangle.borderTop.y === square.borderBottom.y) {
      if (
        rectangle.borderRight.x >= square.borderLeft.x &&
        rectangle.borderLeft.x <= square.borderRight.x
      ) {
        rectangle.vector.y = -1 * rectangle.vector.y;
        if (square.vector.y === 0) {
          square.vector.y = -1;
        } else {
          square.vector.y *= -1;
        }
      }
    }

    if (rectangle.borderBottom.y === square.borderTop.y) {
      if (
        rectangle.borderRight.x >= square.borderLeft.x &&
        rectangle.borderLeft.x <= square.borderRight.x
      ) {
        rectangle.vector.y *= -1;
        if (square.vector.y === 0) {
          square.vector.y = 1;
        } else {
          square.vector.y = -1 * square.vector.y;
        }
      }
    }

    if (square.borderRight.x === rectangle.borderLeft.x) {
      if (
        rectangle.borderTop.y <= square.borderBottom.y &&
        rectangle.borderBottom.y >= square.borderTop.y
      ) {
        square.vector.x *= -1;
        if (rectangle.vector.x === 0) {
          rectangle.vector.x = 1;
        } else {
          rectangle.vector.x = -1 * rectangle.vector.x;
        }
      }
    }

    if (rectangle.borderRight.x === square.borderLeft.x) {
      if (
        rectangle.borderTop.y <= square.borderBottom.y &&
        rectangle.borderBottom.y >= square.borderTop.y
      ) {
        square.vector.x *= -1;
        if (rectangle.vector.x === 0) {
          rectangle.vector.x = -1;
        } else {
          rectangle.vector.x = -1 * rectangle.vector.x;
        }
      }
    }
  }

  pause ? null : window.requestAnimationFrame(gameLoop);
}

export { start, stop };
