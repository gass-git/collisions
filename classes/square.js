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

  detectCollision(border, collider) {
    const inHorizontalRange =
      collider.borderRight.x >= this.borderLeft.x &&
      collider.borderLeft.x <= this.borderRight.x;

    switch (border) {
      case "bottom":
        if (collider.borderTop.y === this.borderBottom.y) {
          if (inHorizontalRange) {
            if (this.vector.y === 0) {
              this.vector.y = -1;
            } else {
              this.vector.y *= -1;
            }
          }
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
