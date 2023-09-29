export function borderInCollision(obj, pos) {
  const reference = obj.collisionBody.inCollision.borderArea;
  const time = 100;

  switch (pos) {
    case "top":
      reference.top = true;
      setTimeout(() => {
        reference.top = false;
      }, time);
      break;
    case "right":
      reference.right = true;
      setTimeout(() => {
        reference.right = false;
      }, time);
      break;
    case "bottom":
      reference.bottom = true;
      setTimeout(() => {
        reference.bottom = false;
      }, time);
      break;
    case "left":
      reference.left = true;
      setTimeout(() => {
        reference.left = false;
      }, time);
      break;
    default:
      null;
  }
}
