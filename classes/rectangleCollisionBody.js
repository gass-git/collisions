export default class RectangleCollisionBody {
  constructor(width, height, posX, posY, cornerDelta) {
    this.pos = { x: posX, y: posY };
    this.width = width;
    this.height = height;
    this.cornerDelta = cornerDelta;
    this.inCollision = {
      cornerArea: {
        topLeft: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
      },
      borderArea: {
        top: false,
        right: false,
        bottom: false,
        left: false,
      },
    };
  }

  get cornerArea() {
    return {
      top: {
        left: {
          x1: this.pos.x,
          y1: this.pos.y,
          x2: this.pos.x + this.cornerDelta,
          y2: this.pos.y + this.cornerDelta,
        },
        right: {
          x1: this.pos.x + this.width - this.cornerDelta,
          y1: this.pos.y,
          x2: this.pos.x + this.width,
          y2: this.pos.y + this.cornerDelta,
        },
      },
      bottom: {
        left: {
          x1: this.pos.x,
          y1: this.pos.y + this.height - this.cornerDelta,
          x2: this.pos.x + this.cornerDelta,
          y2: this.pos.y + this.height,
        },
        right: {
          x1: this.pos.x + this.width - this.cornerDelta,
          y1: this.pos.y + this.height - this.cornerDelta,
          x2: this.pos.x + this.width,
          y2: this.pos.y + this.height,
        },
      },
    };
  }

  get borderArea() {
    return {
      top: {
        x1: this.pos.x + this.cornerDelta,
        y1: this.pos.y,
        x2: this.pos.x + this.cornerDelta,
        y2: this.pos.y + this.cornerDelta,
        width: this.width - this.cornerDelta * 2,
        height: this.cornerDelta,
      },
      right: {
        x1: this.pos.x + this.width - this.cornerDelta,
        y1: this.pos.y + this.cornerDelta,
        x2: this.pos.x + this.width,
        y2: this.pos.y + this.height - this.cornerDelta,
        width: this.cornerDelta,
        height: this.height - this.cornerDelta * 2,
      },
      bottom: {
        x1: this.pos.x + this.cornerDelta,
        y1: this.pos.y + this.height - this.cornerDelta,
        x2: this.pos.x + this.width - this.cornerDelta,
        y2: this.pos.y + this.height,
        width: this.width - this.cornerDelta * 2,
        height: this.cornerDelta,
      },
      left: {
        x1: this.pos.x,
        y1: this.pos.y + this.cornerDelta,
        x2: this.pos.x + this.cornerDelta,
        y2: this.pos.y + this.height - this.cornerDelta,
        width: this.cornerDelta,
        height: this.height - this.cornerDelta * 2,
      },
    };
  }
}
