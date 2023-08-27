export default function handleCanvasCollisions(piece) {
  if (piece.borderBottom.y === canvas.height || piece.borderTop.y === 0) {
    piece.vector.y *= -1;
  }

  if (piece.borderLeft.x === 0) {
    piece.vector.x === 0 ? (piece.vector.x = 1) : (piece.vector.x *= -1);
  }

  if (piece.borderRight.x === canvas.width) {
    piece.vector.x === 0 ? (piece.vector.x = -1) : (piece.vector.x *= -1);
  }
}
