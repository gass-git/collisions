import Rectangle from "../classes/rectangle.js";

export function factory(numberOfObjects, speed) {
  let obj = null;
  const size = 25;
  let arr = [];

  for (let i = 1; i <= numberOfObjects; i++) {
    obj = new Rectangle(
      size,
      size,
      (size + 1) * (i + 1),
      (size + 1) * (i + 1),
      speed,
      speed
    );

    arr.push(obj);
  }

  return arr;
}
