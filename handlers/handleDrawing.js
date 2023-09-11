export default function handleDrawing(obj, context) {
  const red = `rgb(255,160,122)`;

  context.strokeRect(obj.pos.x, obj.pos.y, obj.width, obj.height);
  if (obj.collisionBody.inCollision.cornerArea.topLeft) {
    context.fillStyle = red;
    context.fillRect(
      obj.collisionBody.cornerArea.top.left.x1,
      obj.collisionBody.cornerArea.top.left.y1,
      obj.collisionBody.cornerDelta,
      obj.collisionBody.cornerDelta
    );
  }
  context.strokeRect(
    obj.collisionBody.cornerArea.top.left.x1,
    obj.collisionBody.cornerArea.top.left.y1,
    obj.collisionBody.cornerDelta,
    obj.collisionBody.cornerDelta
  );
  if (obj.collisionBody.inCollision.cornerArea.topRight) {
    context.fillStyle = red;
    context.fillRect(
      obj.collisionBody.cornerArea.top.right.x1,
      obj.collisionBody.cornerArea.top.right.y1,
      obj.collisionBody.cornerDelta,
      obj.collisionBody.cornerDelta
    );
  }
  context.strokeRect(
    obj.collisionBody.cornerArea.top.right.x1,
    obj.collisionBody.cornerArea.top.right.y1,
    obj.collisionBody.cornerDelta,
    obj.collisionBody.cornerDelta
  );
  context.strokeRect(
    obj.collisionBody.cornerArea.bottom.left.x1,
    obj.collisionBody.cornerArea.bottom.left.y1,
    obj.collisionBody.cornerDelta,
    obj.collisionBody.cornerDelta
  );
  if (obj.collisionBody.inCollision.cornerArea.bottomLeft) {
    context.fillStyle = red;
    context.fillRect(
      obj.collisionBody.cornerArea.bottom.left.x1,
      obj.collisionBody.cornerArea.bottom.left.y1,
      obj.collisionBody.cornerDelta,
      obj.collisionBody.cornerDelta
    );
  }
  if (obj.collisionBody.inCollision.cornerArea.bottomRight) {
    context.fillStyle = red;
    context.fillRect(
      obj.collisionBody.cornerArea.bottom.right.x1,
      obj.collisionBody.cornerArea.bottom.right.y1,
      obj.collisionBody.cornerDelta,
      obj.collisionBody.cornerDelta
    );
  }
  context.strokeRect(
    obj.collisionBody.cornerArea.bottom.right.x1,
    obj.collisionBody.cornerArea.bottom.right.y1,
    obj.collisionBody.cornerDelta,
    obj.collisionBody.cornerDelta
  );
  if (obj.collisionBody.inCollision.borderArea.top) {
    context.fillStyle = "yellow";
    context.fillRect(
      obj.collisionBody.borderArea.top.x1,
      obj.collisionBody.borderArea.top.y1,
      obj.collisionBody.borderArea.top.width,
      obj.collisionBody.borderArea.top.height
    );
  }
  context.strokeRect(
    obj.collisionBody.borderArea.top.x1,
    obj.collisionBody.borderArea.top.y1,
    obj.collisionBody.borderArea.top.width,
    obj.collisionBody.borderArea.top.height
  );
  if (obj.collisionBody.inCollision.borderArea.right) {
    context.fillStyle = "yellow";
    context.fillRect(
      obj.collisionBody.borderArea.right.x1,
      obj.collisionBody.borderArea.right.y1,
      obj.collisionBody.borderArea.right.width,
      obj.collisionBody.borderArea.right.height
    );
  }
  context.strokeRect(
    obj.collisionBody.borderArea.right.x1,
    obj.collisionBody.borderArea.right.y1,
    obj.collisionBody.borderArea.right.width,
    obj.collisionBody.borderArea.right.height
  );
  context.strokeRect(
    obj.collisionBody.borderArea.bottom.x1,
    obj.collisionBody.borderArea.bottom.y1,
    obj.collisionBody.borderArea.bottom.width,
    obj.collisionBody.borderArea.bottom.height
  );
  if (obj.collisionBody.inCollision.borderArea.left) {
    context.fillStyle = "yellow";
    context.fillRect(
      obj.collisionBody.borderArea.left.x1,
      obj.collisionBody.borderArea.left.y1,
      obj.collisionBody.borderArea.left.width,
      obj.collisionBody.borderArea.left.height
    );
  }
  context.strokeRect(
    obj.collisionBody.borderArea.left.x1,
    obj.collisionBody.borderArea.left.y1,
    obj.collisionBody.borderArea.left.width,
    obj.collisionBody.borderArea.left.height
  );
  if (obj.collisionBody.inCollision.borderArea.bottom) {
    context.fillStyle = "yellow";
    context.fillRect(
      obj.collisionBody.borderArea.bottom.x1,
      obj.collisionBody.borderArea.bottom.y1,
      obj.collisionBody.borderArea.bottom.width,
      obj.collisionBody.borderArea.bottom.height
    );
  }
}
