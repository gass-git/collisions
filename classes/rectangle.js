export default class Rectangle {
  constructor(width, height, posX, posY, vectorX, vectorY) {
    this.pos = { x: posX, y: posY };
    this.vector = { x: vectorX, y: vectorY };
    this.width = width;
    this.height = height;
  }

  updatePos() {
    this.pos.y += this.vector.y;
    this.pos.x += this.vector.x;
  }

  /**
   * TODO
   * - add conditions to when the vector Y and X are 0
   */
  detectSidesCollisions(collider) {
    const inHorizontalRange =
      this.borderRight.x >= collider.borderLeft.x &&
      this.borderLeft.x <= collider.borderRight.x;

    const inVerticalRange =
      this.borderTop.y <= collider.borderBottom.y &&
      this.borderBottom.y >= collider.borderTop.y;

    ["top", "right", "bottom", "left"].forEach((side) => {
      switch (side) {
        case "top":
          if (
            this.borderTop.y === collider.borderBottom.y &&
            inHorizontalRange
          ) {
            this.vector.y = -1 * this.vector.y;
          }
          break;
        case "bottom":
          if (
            this.borderBottom.y === collider.borderTop.y &&
            inHorizontalRange
          ) {
            this.vector.y *= -1;
          }
          break;
        case "right":
          if (this.borderRight.x === collider.borderLeft.x && inVerticalRange) {
            this.vector.x === 0 ? (this.vector.x = 1) : (this.vector.x *= -1);
          }
          break;
        case "left":
          if (this.borderLeft.x === collider.borderRight.x && inVerticalRange) {
            this.vector.x === 0 ? (this.vector.x = -1) : (this.vector.x *= -1);
          }
          break;

        default:
          null;
      }
    });
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
