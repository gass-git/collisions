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

  /**
   * @note
   *
   * once the code works for one object, change
   * the @param object to @param objects
   *
   * the @param objects will be an array of all the rectangle
   * instances
   *
   * ** detect and react to: corner to corner and border to border collisions.
   */

  checkObjectsCollisions(object, speed) {
    // border area (right)
    if (
      inArea(
        object.collisionBody.borderArea.left.x1,
        this.collisionBody.borderArea.right.x1,
        this.collisionBody.borderArea.right.x2
      ) &&
      (inArea(
        object.collisionBody.borderArea.left.y1,
        this.collisionBody.borderArea.right.y1,
        this.collisionBody.borderArea.right.y2
      ) ||
        inArea(
          object.collisionBody.borderArea.left.y2,
          this.collisionBody.borderArea.right.y1,
          this.collisionBody.borderArea.right.y2
        ))
    ) {
      this.vector.x *= -1;

      this.collisionBody.inCollision.borderArea.right = true;

      setTimeout(() => {
        this.collisionBody.inCollision.borderArea.right = false;
      }, 200);
    }

    // border area (left)
    if (
      inArea(
        object.collisionBody.borderArea.right.x2,
        this.collisionBody.borderArea.left.x1,
        this.collisionBody.borderArea.left.x2
      ) &&
      (inArea(
        object.collisionBody.borderArea.right.y1,
        this.collisionBody.borderArea.left.y1,
        this.collisionBody.borderArea.left.y2
      ) ||
        inArea(
          object.collisionBody.borderArea.right.y2,
          this.collisionBody.borderArea.left.y1,
          this.collisionBody.borderArea.left.y2
        ))
    ) {
      this.vector.x *= -1;
      this.collisionBody.inCollision.borderArea.left = true;

      setTimeout(() => {
        this.collisionBody.inCollision.borderArea.left = false;
      }, 200);
    }

    // corner top (right)
    if (
      inArea(
        object.collisionBody.cornerArea.bottom.left.x1,
        this.collisionBody.cornerArea.top.right.x1,
        this.collisionBody.cornerArea.top.right.x2
      ) &&
      (inArea(
        object.collisionBody.cornerArea.bottom.left.y2,
        this.collisionBody.cornerArea.top.right.y1,
        this.collisionBody.cornerArea.top.right.y2
      ) ||
        inArea(
          object.collisionBody.cornerArea.bottom.left.y1,
          this.collisionBody.cornerArea.top.right.y1,
          this.collisionBody.cornerArea.top.right.y2
        ))
    ) {
      if (this.vector.x === 0) {
        this.vector.x = speed * -1;
      } else {
        this.vector.x *= -1;
      }

      if (this.vector.y === 0) {
        this.vector.y = speed;
      } else if (this.vector.y < 0) {
        this.vector.y *= -1;
      }

      this.collisionBody.inCollision.cornerArea.top.right = true;

      setTimeout(() => {
        this.collisionBody.inCollision.cornerArea.top.right = false;
      }, 200);
    }

    // corner bottom (right)
    if (
      inArea(
        object.collisionBody.cornerArea.top.left.x1,
        this.collisionBody.cornerArea.bottom.right.x1,
        this.collisionBody.cornerArea.bottom.right.x2
      ) &&
      (inArea(
        object.collisionBody.cornerArea.top.left.y2,
        this.collisionBody.cornerArea.bottom.right.y1,
        this.collisionBody.cornerArea.bottom.right.y2
      ) ||
        inArea(
          object.collisionBody.cornerArea.top.left.y1,
          this.collisionBody.cornerArea.bottom.right.y1,
          this.collisionBody.cornerArea.bottom.right.y2
        ))
    ) {
      if (this.vector.x === 0) {
        this.vector.x = speed * -1;
      } else {
        this.vector.x *= -1;
      }

      if (this.vector.y === 0) {
        this.vector.y = speed * -1;
      } else if (this.vector.y > 0) {
        this.vector.y *= -1;
      }
      this.collisionBody.inCollision.cornerArea.bottom.right = true;

      setTimeout(() => {
        this.collisionBody.inCollision.cornerArea.bottom.right = false;
      }, 200);
    }

    // corner top (left)
    if (
      inArea(
        object.collisionBody.cornerArea.bottom.right.x2,
        this.collisionBody.cornerArea.top.left.x1,
        this.collisionBody.cornerArea.top.left.x2
      ) &&
      (inArea(
        object.collisionBody.cornerArea.bottom.right.y2,
        this.collisionBody.cornerArea.top.left.y1,
        this.collisionBody.cornerArea.top.left.y2
      ) ||
        inArea(
          object.collisionBody.cornerArea.bottom.right.y1,
          this.collisionBody.cornerArea.top.left.y1,
          this.collisionBody.cornerArea.top.left.y2
        ))
    ) {
      this.collisionBody.inCollision.cornerArea.top.left = true;

      setTimeout(() => {
        this.collisionBody.inCollision.cornerArea.top.left = false;
      }, 200);
    }

    // border area (bottom)
    if (
      inArea(
        object.collisionBody.borderArea.top.y1,
        this.collisionBody.borderArea.bottom.y1,
        this.collisionBody.borderArea.bottom.y2
      ) &&
      (inArea(
        object.collisionBody.borderArea.top.x1,
        this.collisionBody.borderArea.bottom.x1,
        this.collisionBody.borderArea.bottom.x2
      ) ||
        inArea(
          object.collisionBody.borderArea.top.x2,
          this.collisionBody.borderArea.bottom.x1,
          this.collisionBody.borderArea.bottom.x2
        ))
    ) {
      this.vector.y *= -1;

      this.collisionBody.inCollision.borderArea.bottom = true;

      setTimeout(() => {
        this.collisionBody.inCollision.borderArea.bottom = false;
      }, 200);
    }

    // border area (top)
    if (
      inArea(
        object.collisionBody.borderArea.bottom.y2,
        this.collisionBody.borderArea.top.y1,
        this.collisionBody.borderArea.top.y2
      ) &&
      (inArea(
        object.collisionBody.borderArea.bottom.x1,
        this.collisionBody.borderArea.top.x1,
        this.collisionBody.borderArea.top.x2
      ) ||
        inArea(
          object.collisionBody.borderArea.bottom.x2,
          this.collisionBody.borderArea.top.x1,
          this.collisionBody.borderArea.top.x2
        ))
    ) {
      this.vector.y *= -1;
      this.collisionBody.inCollision.borderArea.top = true;

      setTimeout(() => {
        this.collisionBody.inCollision.borderArea.top = false;
      }, 200);
    }
  }
}
