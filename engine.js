import Rectangle from "./classes/rectangle.js";
import handleCanvasCollisions from "./handlers/handleCanvasCollisions.js";
import { paused } from "./handlers/handlePauseResume.js";
import {
  handleCornerCollisions,
  cornerCollision,
} from "./handlers/handleCornerCollisions.js";

/** TODO - fix
 * bug: collisions don't work properly when the speed is a decimal number
 * or bigger than 2
 */

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speed = 2.5;
const rectOne = new Rectangle(50, 50, 0, 0, speed, speed);
const rectTwo = new Rectangle(50, 50, 50, 100, speed, 0);
const objects = [rectOne, rectTwo];
const cornerLength = 3;

export function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  objects.forEach((obj) => {
    context.strokeRect(obj.pos.x, obj.pos.y, obj.width, obj.height);
    obj.updatePos();
    handleCanvasCollisions(obj, speed);
  });

  // handleSideCollisions(square, rect, speed);

  if (cornerCollision(rectOne, rectTwo, cornerLength)) {
    console.log("corner collision detected");
    handleCornerCollisions(rectOne, rectTwo, speed);
    console.log(rectOne);
  } else {
    rectOne.checkCollisions(rectTwo, speed);
    rectTwo.checkCollisions(rectOne, speed);
    // handleSideCollisions(rect, square, speed);
  }

  paused ? null : window.requestAnimationFrame(gameLoop);
}
