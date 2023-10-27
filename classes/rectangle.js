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
      8
    );
  }
}
