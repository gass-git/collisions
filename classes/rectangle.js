import inRange from "../composables/inRange.js";

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

  get border() {
    return {
      cornerTopLeft: {},
      top: {},
      cornerTopRight: {},
      right: {},
      cornerBottomRight: {},
      bottom: {},
      cornerBottomLeft: {},
      left: {},
    };
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

  checkCollisions(collider, speed) {
    const inHorizontalRange =
      this.borderRight.x >= collider.borderLeft.x &&
      this.borderLeft.x <= collider.borderRight.x;

    const inVerticalRange =
      this.borderTop.y <= collider.borderBottom.y &&
      this.borderBottom.y >= collider.borderTop.y;

    let delta = speed * 2 + 1;

    // range border top
    if (
      inRange(
        collider.borderBottom.y,
        this.borderTop.y,
        this.borderTop.y + delta
      ) &&
      inHorizontalRange
    ) {
      console.log("top collision");
      this.vector.y === 0 ? (this.vector.y = 1 * speed) : (this.vector.y *= -1);
    }

    // border right
    if (
      inRange(
        collider.borderLeft.x,
        this.borderRight.x - delta,
        this.borderRight.x
      ) &&
      inVerticalRange
    ) {
      console.log(`right collision. vectorX: ${this.vector.x} `);
      this.vector.x === 0 ? (this.vector.x = 1 * speed) : (this.vector.x *= -1);
    }

    // range border bottom
    if (
      inRange(
        collider.borderTop.y,
        this.borderBottom.y - 5,
        this.borderBottom.y
      ) &&
      inHorizontalRange
    ) {
      console.log(`bottom collision. vectorY: ${this.vector.y} `);
      this.vector.y === 0
        ? (this.vector.y = -1 * speed)
        : (this.vector.y *= -1);
    }

    // range border left
    if (
      inRange(
        collider.borderRight.x,
        this.borderLeft.x,
        this.borderLeft.x + delta
      ) &&
      inVerticalRange
    ) {
      console.log(`left collision detected. vectorX: ${this.vector.x}`);
      this.vector.x === 0
        ? (this.vector.x = -1 * speed)
        : (this.vector.x *= -1);
    }
  }
}
