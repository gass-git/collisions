function updatePos(objects) {
  objects.forEach((obj) => {
    obj.pos.y += obj.vector.y;
    obj.pos.x += obj.vector.x;
    obj.collisionBody.pos.x = obj.pos.x;
    obj.collisionBody.pos.y = obj.pos.y;
  });
}

export { updatePos };
