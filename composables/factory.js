import Rectangle from "../classes/rectangle.js";

export function factory(numberOfObjects, speed) {
  let obj = null;
  const size = 25;
  let arr = [];

  for (let i = 1; i <= numberOfObjects; i++) {
    let direction = i % 2 ? -1 : 1;

    obj = new Rectangle(
      size,
      size,
      (size + 3) * (i + 1),
      (size + 3) * (i + 1),
      speed * direction,
      speed * direction
    );

    arr.push(obj);
  }

  return arr;
}
