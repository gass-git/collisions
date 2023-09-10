export default class RectangleCollisionBody {
  constructor(width, height, posX, posY, cornerDelta) {
    this.pos = { x: posX, y: posY };
    this.width = width;
    this.height = height;
    this.cornerDelta = cornerDelta;
  }

  get corner() {
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
          x2: this.width,
          y2: this.pos.y + this.cornerDelta,
        },
      },
      bottom: {
        left: {
          x1: this.pos.x,
          y1: this.pos.x + this.height - this.cornerDelta,
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

  get border() {
    return {
      top: {},
      right: {},
      bottom: {},
      left: {},
    };
  }
}
