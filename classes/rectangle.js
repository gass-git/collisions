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
