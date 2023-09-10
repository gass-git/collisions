import RectangleCollisionBody from "./rectangleCollisionBody.js";

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
