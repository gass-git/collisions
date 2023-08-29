export default class Square {
  constructor(width, posX, posY, vectorX, vectorY) {
    this.pos = { x: posX, y: posY };
    this.vector = { x: vectorX, y: vectorY };
    this.width = this.height = width;
  }

  updatePos() {
    this.pos.y += this.vector.y;
    this.pos.x += this.vector.x;
  }

  /**
   * TODO
   * - add conditions to when the vector Y and X are 0
   * - do a for loop inside detectCollisions instead of calling
   * all the cases from the gameLoop
   */
  detectCollision(border, collider) {
    const inHorizontalRange =
      collider.borderRight.x >= this.borderLeft.x &&
      collider.borderLeft.x <= this.borderRight.x;

    const inVerticalRange =
      collider.borderTop.y <= this.borderBottom.y &&
      collider.borderBottom.y >= this.borderTop.y;

    switch (border) {
      case "bottom":
        if (collider.borderTop.y === this.borderBottom.y && inHorizontalRange) {
          if (this.vector.y === 0) {
            this.vector.y = -1;
          } else {
            this.vector.y *= -1;
          }
        }
        break;
      case "top":
        if (collider.borderBottom.y === this.borderTop.y && inHorizontalRange) {
          this.vector.y === 0 ? (this.vector.y = 1) : (this.vector.y *= -1);
        }
        break;
      case "right":
        if (this.borderRight.x === collider.borderLeft.x && inVerticalRange) {
          this.vector.x *= -1;
        }
        break;
      case "left":
        if (this.borderLeft.x === collider.borderRight.x && inVerticalRange) {
          this.vector.x += -1;
        }
        break;
      default:
        null;
    }
  }

  get borderTop() {
    return { y: this.pos.y };
  }

  get borderBottom() {
    return { y: this.pos.y + this.height };
  }

  get borderLeft() {
    return { x: this.pos.x };
  }

  get borderRight() {
    return { x: this.pos.x + this.width };
  }
}
