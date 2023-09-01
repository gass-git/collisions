function cornerCollision(obj, collider, cornerLength) {
  const inTopLeftCorner =
    (obj.borderTop.y === collider.borderBottom.y &&
      Math.abs(obj.borderLeft.x - collider.borderRight.x) <= cornerLength) ||
    (obj.borderLeft.x === collider.borderRight.x &&
      Math.abs(obj.borderTop.y - collider.borderBottom.y) <= cornerLength);

  const inTopRightCorner =
    (obj.borderTop.y === collider.borderBottom.y &&
      Math.abs(obj.borderRight.x - collider.borderLeft.x) <= cornerLength) ||
    (obj.borderRight.x === collider.borderLeft.x &&
      Math.abs(obj.borderTop.y - collider.borderBottom.y) <= cornerLength);

  const inBottomLeftCorner =
    (obj.borderBottom.y === collider.borderTop.y &&
      Math.abs(obj.borderLeft.x - collider.borderRight.x) <= cornerLength) ||
    (obj.borderLeft.x === collider.borderRight.x &&
      Math.abs(obj.borderBottom.y - collider.borderTop.y) <= cornerLength);

  const inBottomRightCorner =
    (obj.borderBottom.y === collider.borderTop.y &&
      Math.abs(obj.borderRight.x - collider.borderLeft.x) <= cornerLength) ||
    (obj.borderRight.x === collider.borderLeft.x &&
      Math.abs(obj.borderBottom.y - collider.borderTop.y) <= cornerLength);

  const C = [
    inTopLeftCorner,
    inTopLeftCorner,
    inBottomLeftCorner,
    inBottomRightCorner,
  ];

  return C[0] || C[1] || C[2] || C[3];
}

function handleCornerCollisions(obj, collider) {
  if (obj.vector.y === 0) obj.vector.y = collider.vector.y;
  else obj.vector.y *= -1;

  if (obj.vector.x === 0) obj.vector.x = collider.vector.x;
  else obj.vector.x *= -1;

  if (collider.vector.y === 0) collider.vector.y = obj.vector.y;
  else collider.vector.y *= -1;

  if (collider.vector.x === 0) collider.vector.x = obj.vector.x;
  else collider.vector.x *= -1;
}

export { cornerCollision, handleCornerCollisions };
