import RectangleCollisionBody from "./rectangleCollisionBody.js";
import inArea from "../composables/inArea.js";

export default class Rectangle {
  constructor(width, height, posX, posY, vectorX, vectorY) {
    this.pos = { x: posX, y: posY };
    this.vector = { x: vectorX, y: vectorY };
    this.width = width;
    this.height = height;
    this.collisionBody = new RectangleCollisionBody(
      width,
      height,
      posX,
      posY,
      5
    );
  }

  updatePos() {
    this.pos.y += this.vector.y;
    this.pos.x += this.vector.x;
    this.collisionBody.pos.x = this.pos.x;
    this.collisionBody.pos.y = this.pos.y;
  }

  checkCanvasCollisions(canvas) {
    // corner area (bottom left)
    if (
      inArea(
        canvas.height,
        this.collisionBody.cornerArea.bottom.left.y1,
        this.collisionBody.cornerArea.bottom.left.y2
      )
    ) {
      console.log("collision: corner area (bottom left)");
    }

    // border area (bottom)
    if (
      inArea(
        canvas.height,
        this.collisionBody.borderArea.bottom.y1,
        this.collisionBody.borderArea.bottom.y2
      )
    ) {
      console.log("collision: border area (bottom)");
      this.vector.y *= -1; // <-- just for testing
      this.collisionBody.inCollision.borderArea.bottom = true;

      setTimeout(() => {
        this.collisionBody.inCollision.borderArea.bottom = false;
      }, 200);
    }

    // corner area (bottom right)
    if (
      inArea(
        canvas.height,
        this.collisionBody.cornerArea.bottom.right.y1,
        this.collisionBody.cornerArea.bottom.right.y2
      )
    ) {
      console.log("collision: corner area (bottom right)");
    }
  }
}
