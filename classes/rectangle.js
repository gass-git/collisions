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
      15
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
      ) ||
      inArea(
        0,
        this.collisionBody.cornerArea.bottom.left.x1,
        this.collisionBody.cornerArea.bottom.left.x2
      )
    ) {
      console.log("collision: corner area (bottom left)");
      this.collisionBody.inCollision.cornerArea.bottomLeft = true;

      setTimeout(() => {
        this.collisionBody.inCollision.cornerArea.bottomLeft = false;
      }, 200);
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
      this.vector.y *= -1;
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
      ) ||
      inArea(
        canvas.width,
        this.collisionBody.cornerArea.bottom.right.x1,
        this.collisionBody.cornerArea.bottom.right.x2
      )
    ) {
      console.log("collision: corner area (bottom right)");
      this.collisionBody.inCollision.cornerArea.bottomRight = true;

      setTimeout(() => {
        this.collisionBody.inCollision.cornerArea.bottomRight = false;
      }, 200);
    }

    // border area (right)
    if (
      inArea(
        canvas.width,
        this.collisionBody.borderArea.right.x1,
        this.collisionBody.borderArea.right.x2
      )
    ) {
      this.vector.x *= -1;
      this.collisionBody.inCollision.borderArea.right = true;

      setTimeout(() => {
        this.collisionBody.inCollision.borderArea.right = false;
      }, 200);
    }

    // corner area (top right)
    if (
      inArea(
        canvas.width,
        this.collisionBody.cornerArea.top.right.x1,
        this.collisionBody.cornerArea.top.right.x2
      ) ||
      inArea(
        0,
        this.collisionBody.cornerArea.top.right.y1,
        this.collisionBody.cornerArea.top.right.y2
      )
    ) {
      console.log(`collision corner area top right`);
      this.collisionBody.inCollision.cornerArea.topRight = true;

      setTimeout(() => {
        this.collisionBody.inCollision.cornerArea.topRight = false;
      }, 200);
    }

    // border area (top)
    if (
      inArea(
        0,
        this.collisionBody.borderArea.top.y1,
        this.collisionBody.borderArea.top.y2
      )
    ) {
      this.vector.y *= -1;
      this.collisionBody.inCollision.borderArea.top = true;

      setTimeout(() => {
        this.collisionBody.inCollision.borderArea.top = false;
      }, 200);
    }

    // border area (left)
    if (
      inArea(
        0,
        this.collisionBody.borderArea.left.x1,
        this.collisionBody.borderArea.left.x2
      )
    ) {
      this.vector.x *= -1;

      this.collisionBody.inCollision.borderArea.left = true;

      setTimeout(() => {
        this.collisionBody.inCollision.borderArea.left = false;
      }, 200);
    }

    // corner area (top left)
    if (
      inArea(
        0,
        this.collisionBody.cornerArea.top.left.x1,
        this.collisionBody.cornerArea.top.left.x2
      ) ||
      inArea(
        0,
        this.collisionBody.cornerArea.top.left.y1,
        this.collisionBody.cornerArea.top.left.y2
      )
    ) {
      this.collisionBody.inCollision.cornerArea.topLeft = true;

      setTimeout(() => {
        this.collisionBody.inCollision.cornerArea.topLeft = false;
      }, 200);
    }
  }
}
