import inArea from "../composables/inArea.js";

function handleCanvasCollisions(objects, canvas) {
  objects.forEach((obj) => {
    // corner area (bottom left)
    if (
      inArea(
        canvas.height,
        obj.collisionBody.cornerArea.bottom.left.y1,
        obj.collisionBody.cornerArea.bottom.left.y2
      ) ||
      inArea(
        0,
        obj.collisionBody.cornerArea.bottom.left.x1,
        obj.collisionBody.cornerArea.bottom.left.x2
      )
    ) {
      obj.collisionBody.inCollision.cornerArea.bottom.left = true;

      setTimeout(() => {
        obj.collisionBody.inCollision.cornerArea.bottom.left = false;
      }, 200);
    }

    // border area (bottom)
    if (
      inArea(
        canvas.height,
        obj.collisionBody.borderArea.bottom.y1,
        obj.collisionBody.borderArea.bottom.y2
      )
    ) {
      obj.vector.y *= -1;
      obj.collisionBody.inCollision.borderArea.bottom = true;

      setTimeout(() => {
        obj.collisionBody.inCollision.borderArea.bottom = false;
      }, 200);
    }

    // corner area (bottom right)
    if (
      inArea(
        canvas.height,
        obj.collisionBody.cornerArea.bottom.right.y1,
        obj.collisionBody.cornerArea.bottom.right.y2
      ) ||
      inArea(
        canvas.width,
        obj.collisionBody.cornerArea.bottom.right.x1,
        obj.collisionBody.cornerArea.bottom.right.x2
      )
    ) {
      obj.collisionBody.inCollision.cornerArea.bottom.right = true;

      setTimeout(() => {
        obj.collisionBody.inCollision.cornerArea.bottom.right = false;
      }, 200);
    }

    // border area (right)
    if (
      inArea(
        canvas.width,
        obj.collisionBody.borderArea.right.x1,
        obj.collisionBody.borderArea.right.x2
      )
    ) {
      obj.vector.x *= -1;
      obj.collisionBody.inCollision.borderArea.right = true;

      setTimeout(() => {
        obj.collisionBody.inCollision.borderArea.right = false;
      }, 200);
    }

    // corner area (top right)
    if (
      inArea(
        canvas.width,
        obj.collisionBody.cornerArea.top.right.x1,
        obj.collisionBody.cornerArea.top.right.x2
      ) ||
      inArea(
        0,
        obj.collisionBody.cornerArea.top.right.y1,
        obj.collisionBody.cornerArea.top.right.y2
      )
    ) {
      obj.collisionBody.inCollision.cornerArea.top.right = true;

      setTimeout(() => {
        obj.collisionBody.inCollision.cornerArea.top.right = false;
      }, 200);
    }

    // border area (top)
    if (
      inArea(
        0,
        obj.collisionBody.borderArea.top.y1,
        obj.collisionBody.borderArea.top.y2
      )
    ) {
      obj.vector.y *= -1;
      obj.collisionBody.inCollision.borderArea.top = true;

      setTimeout(() => {
        obj.collisionBody.inCollision.borderArea.top = false;
      }, 200);
    }

    // border area (left)
    if (
      inArea(
        0,
        obj.collisionBody.borderArea.left.x1,
        obj.collisionBody.borderArea.left.x2
      )
    ) {
      obj.vector.x *= -1;

      obj.collisionBody.inCollision.borderArea.left = true;

      setTimeout(() => {
        obj.collisionBody.inCollision.borderArea.left = false;
      }, 200);
    }

    // corner area (top left)
    if (
      inArea(
        0,
        obj.collisionBody.cornerArea.top.left.x1,
        obj.collisionBody.cornerArea.top.left.x2
      ) ||
      inArea(
        0,
        obj.collisionBody.cornerArea.top.left.y1,
        obj.collisionBody.cornerArea.top.left.y2
      )
    ) {
      obj.collisionBody.inCollision.cornerArea.top.left = true;

      setTimeout(() => {
        obj.collisionBody.inCollision.cornerArea.top.left = false;
      }, 200);
    }
  });
}

export { handleCanvasCollisions };
