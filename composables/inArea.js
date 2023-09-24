export default function inArea(number, min, max) {
  let errorMargin = 0;
  return number >= min - errorMargin && number <= max + errorMargin;
}
