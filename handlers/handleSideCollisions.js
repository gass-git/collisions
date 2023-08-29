export default function detectSidesCollisions(obj, collider) {
  const inHorizontalRange =
    obj.borderRight.x >= collider.borderLeft.x &&
    obj.borderLeft.x <= collider.borderRight.x;

  const inVerticalRange =
    obj.borderTop.y <= collider.borderBottom.y &&
    obj.borderBottom.y >= collider.borderTop.y;

  ["top", "right", "bottom", "left"].forEach((side) => {
    switch (side) {
      case "top":
        if (obj.borderTop.y === collider.borderBottom.y && inHorizontalRange) {
          obj.vector.y === 0 ? (obj.vector.y = 1) : (obj.vector.y *= -1);
        }
        break;
      case "bottom":
        if (obj.borderBottom.y === collider.borderTop.y && inHorizontalRange) {
          obj.vector.y === 0 ? (obj.vector.y = -1) : (obj.vector.y *= -1);
        }
        break;
      case "right":
        if (obj.borderRight.x === collider.borderLeft.x && inVerticalRange) {
          obj.vector.x === 0 ? (obj.vector.x = 1) : (obj.vector.x *= -1);
        }
        break;
      case "left":
        if (obj.borderLeft.x === collider.borderRight.x && inVerticalRange) {
          obj.vector.x === 0 ? (obj.vector.x = -1) : (obj.vector.x *= -1);
        }
        break;

      default:
        null;
    }
  });
}
