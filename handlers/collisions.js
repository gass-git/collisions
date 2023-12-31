import inArea from "../composables/inArea.js";
import { borderInCollision } from "../composables/inCollision.js";

function handleAllCollisions(objects, speed, canvas) {
  handleCanvasCollisions(objects, canvas);
  handleBordersCollisions(objects, speed);
  handleCornersCollisions(objects, speed);
}

function handleCanvasCollisions(objects, canvas) {
  objects.forEach((obj) => {
    /*
     * BORDER BOTTOM
     */
    if (
      inArea(
        canvas.height,
        obj.collisionBody.borderArea.bottom.y1,
        obj.collisionBody.borderArea.bottom.y2
      )
    ) {
      obj.vector.y *= -1;
      borderInCollision(obj, "bottom");
    }

    /*
     * BORDER RIGHT
     */
    if (
      inArea(
        canvas.width,
        obj.collisionBody.borderArea.right.x1,
        obj.collisionBody.borderArea.right.x2
      )
    ) {
      obj.vector.x *= -1;
      borderInCollision(obj, "right");
    }

    /*
     * BORDER TOP
     */
    if (
      inArea(
        0,
        obj.collisionBody.borderArea.top.y1,
        obj.collisionBody.borderArea.top.y2
      )
    ) {
      obj.vector.y *= -1;
      borderInCollision(obj, "top");
    }

    /*
     * BORDER LEFT
     */
    if (
      inArea(
        0,
        obj.collisionBody.borderArea.left.x1,
        obj.collisionBody.borderArea.left.x2
      )
    ) {
      obj.vector.x *= -1;
      borderInCollision(obj, "left");
    }
  });
}

function handleBordersCollisions(objects, speed) {
  objects.forEach((obj) => {
    let colliders = objects.filter((el) => el !== obj);

    colliders.forEach((collider) => {
      /*
       * BORDER AREA RIGHT
       *
       * -------------------
       *                   |
       *      (x1,y1) +----+ (x2,y1)
       *              |    |
       *              |    |
       *              |    |
       *              |    |
       *              |    |
       *      (x1,y2) +----+ (x2,y2)
       *                   |
       * -------------------
       *
       */
      if (
        inArea(
          collider.collisionBody.borderArea.left.x1,
          obj.collisionBody.borderArea.right.x1,
          obj.collisionBody.borderArea.right.x2
        ) &&
        (inArea(
          collider.collisionBody.borderArea.left.y1,
          obj.collisionBody.borderArea.right.y1,
          obj.collisionBody.borderArea.right.y2
        ) ||
          inArea(
            collider.collisionBody.borderArea.left.y2,
            obj.collisionBody.borderArea.right.y1,
            obj.collisionBody.borderArea.right.y2
          ))
      ) {
        if (obj.vector.x === 0) {
          obj.vector.x = speed * -1;
        } else {
          obj.vector.x *= -1;
        }
        borderInCollision(obj, "right");
      }

      /*
       * BORDER AREA LEFT
       *
       *              ----------------------
       *              |
       *      (x1,y1) +----+ (x2,y1)
       *              |    |
       *              |    |
       *              |    |
       *              |    |
       *              |    |
       *      (x1,y2) +----+ (x2,y2)
       *              |
       *              ----------------------
       *
       */
      if (
        inArea(
          collider.collisionBody.borderArea.right.x2,
          obj.collisionBody.borderArea.left.x1,
          obj.collisionBody.borderArea.left.x2
        ) &&
        (inArea(
          collider.collisionBody.borderArea.right.y1,
          obj.collisionBody.borderArea.left.y1,
          obj.collisionBody.borderArea.left.y2
        ) ||
          inArea(
            collider.collisionBody.borderArea.right.y2,
            obj.collisionBody.borderArea.left.y1,
            obj.collisionBody.borderArea.left.y2
          ))
      ) {
        if (obj.vector.x === 0) {
          obj.vector.x = speed;
        } else {
          obj.vector.x *= -1;
        }
        borderInCollision(obj, "left");
      }

      /*
       * BORDER AREA BOTTOM
       *
       *
       *       |                           |
       *       |                           |
       *       |                           |
       *       |                           |
       *       | (x1,y1)           (x2,y1) |
       *       |    +-----------------+    |
       *       |    |                 |    |
       *       |    |                 |    |
       *       -----+-----------------+-----
       *         (x1,y2)            (x2,y2)
       *
       */
      if (
        inArea(
          collider.collisionBody.borderArea.top.y1,
          obj.collisionBody.borderArea.bottom.y1,
          obj.collisionBody.borderArea.bottom.y2
        ) &&
        (inArea(
          collider.collisionBody.borderArea.top.x1,
          obj.collisionBody.borderArea.bottom.x1,
          obj.collisionBody.borderArea.bottom.x2
        ) ||
          inArea(
            collider.collisionBody.borderArea.top.x2,
            obj.collisionBody.borderArea.bottom.x1,
            obj.collisionBody.borderArea.bottom.x2
          ))
      ) {
        if (obj.vector.y === 0) {
          obj.vector.y = speed * -1;
        } else {
          obj.vector.y *= -1;
        }
        borderInCollision(obj, "bottom");
      }

      /*
       *  BORDER AREA TOP
       *
       *
       *         (x1,y1)          (x2,y1)
       *       -----+-----------------+-----
       *       |    |                 |    |
       *       |    |                 |    |
       *       |    +-----------------+    |
       *       | (x1,y2)           (x2,y2) |
       *       |                           |
       *       |                           |
       *       |                           |
       *       |                           |
       *
       *
       */
      if (
        inArea(
          collider.collisionBody.borderArea.bottom.y2,
          obj.collisionBody.borderArea.top.y1,
          obj.collisionBody.borderArea.top.y2
        ) &&
        (inArea(
          collider.collisionBody.borderArea.bottom.x1,
          obj.collisionBody.borderArea.top.x1,
          obj.collisionBody.borderArea.top.x2
        ) ||
          inArea(
            collider.collisionBody.borderArea.bottom.x2,
            obj.collisionBody.borderArea.top.x1,
            obj.collisionBody.borderArea.top.x2
          ))
      ) {
        if (obj.vector.y === 0) {
          obj.vector.y = speed * -1;
        } else {
          obj.vector.y *= -1;
        }
        borderInCollision(obj, "top");
      }
    });
  });
}

function handleCornersCollisions(objects, speed) {
  objects.forEach((obj) => {
    let colliders = objects.filter((el) => el !== obj);

    colliders.forEach((collider) => {
      /*
       * CORNER TOP RIGHT
       *
       *   (x1, y1)
       *    ----+----------+  (x2, y1)
       *        |          |
       *        |          |
       *        |          |
       *        |          |
       *        +----------+  (x2, y2)
       *  (x1, y2)         |
       *                   |
       *                   |
       *                   |
       *
       */

      if (
        (inArea(
          collider.collisionBody.cornerArea.bottom.left.x1,
          obj.collisionBody.cornerArea.top.right.x1,
          obj.collisionBody.cornerArea.top.right.x2
        ) ||
          inArea(
            collider.collisionBody.cornerArea.bottom.left.x2,
            obj.collisionBody.cornerArea.top.right.x1,
            obj.collisionBody.cornerArea.top.right.x2
          )) &&
        (inArea(
          collider.collisionBody.cornerArea.bottom.left.y2,
          obj.collisionBody.cornerArea.top.right.y1,
          obj.collisionBody.cornerArea.top.right.y2
        ) ||
          inArea(
            collider.collisionBody.cornerArea.bottom.left.y1,
            obj.collisionBody.cornerArea.top.right.y1,
            obj.collisionBody.cornerArea.top.right.y2
          ))
      ) {
        if (!obj.collisionBody.inCollision.cornerArea.top.right) {
          if (obj.vector.x === 0) {
            obj.vector.x = speed * -1;
          } else {
            obj.vector.x *= -1;
          }

          if (obj.vector.y === 0) {
            obj.vector.y = speed;
          } else if (obj.vector.y < 0) {
            obj.vector.y *= -1;
          }

          obj.collisionBody.inCollision.cornerArea.top.right = true;
          setTimeout(() => {
            obj.collisionBody.inCollision.cornerArea.top.right = false;
          }, 20);
        }
      }

      /*
       * CORNER BOTTOM RIGHT
       *
       *                       |
       *                       |
       *                       |
       *      (x1, y1)         |
       *            +----------+ (x2, y1)
       *            |          |
       *            |          |
       *            |          |
       *            |          |
       *   ---------+----------+ (x2, y2)
       *         (x1, y2)
       *
       */

      if (
        (inArea(
          collider.collisionBody.cornerArea.top.left.x1,
          obj.collisionBody.cornerArea.bottom.right.x1,
          obj.collisionBody.cornerArea.bottom.right.x2
        ) ||
          inArea(
            collider.collisionBody.cornerArea.top.left.x2,
            obj.collisionBody.cornerArea.bottom.right.x1,
            obj.collisionBody.cornerArea.bottom.right.x2
          )) &&
        (inArea(
          collider.collisionBody.cornerArea.top.left.y2,
          obj.collisionBody.cornerArea.bottom.right.y1,
          obj.collisionBody.cornerArea.bottom.right.y2
        ) ||
          inArea(
            collider.collisionBody.cornerArea.top.left.y1,
            obj.collisionBody.cornerArea.bottom.right.y1,
            obj.collisionBody.cornerArea.bottom.right.y2
          ))
      ) {
        if (obj.vector.x === 0) {
          obj.vector.x = speed * -1;
        } else {
          obj.vector.x *= -1;
        }

        if (obj.vector.y === 0) {
          obj.vector.y = speed * -1;
        } else if (obj.vector.y > 0) {
          obj.vector.y *= -1;
        }
        obj.collisionBody.inCollision.cornerArea.bottom.right = true;

        setTimeout(() => {
          obj.collisionBody.inCollision.cornerArea.bottom.right = false;
        }, 20);
      }

      /*
       * CORNER BOTTOM LEFT
       *
       *           |
       *           |
       *           |
       *  (x1, y1) |        (x2, y1)
       *           +----------+
       *           |          |
       *           |          |
       *           |          |
       *           |          |
       *           +----------+ ------------
       *   (x1, y2)       (x2, y2)
       *
       */

      if (
        (inArea(
          collider.collisionBody.cornerArea.top.right.x1,
          obj.collisionBody.cornerArea.bottom.left.x1,
          obj.collisionBody.cornerArea.bottom.left.x2
        ) ||
          inArea(
            collider.collisionBody.cornerArea.top.right.x2,
            obj.collisionBody.cornerArea.bottom.left.x1,
            obj.collisionBody.cornerArea.bottom.left.x2
          )) &&
        (inArea(
          collider.collisionBody.cornerArea.top.right.y1,
          obj.collisionBody.cornerArea.bottom.left.y1,
          obj.collisionBody.cornerArea.bottom.left.y2
        ) ||
          inArea(
            collider.collisionBody.cornerArea.top.right.y2,
            obj.collisionBody.cornerArea.bottom.left.y1,
            obj.collisionBody.cornerArea.bottom.left.y2
          ))
      ) {
        if (!obj.collisionBody.inCollision.cornerArea.bottom.left) {
          if (obj.vector.x === 0) {
            obj.vector.x = speed;
          } else {
            obj.vector.x *= -1;
          }

          if (obj.vector.y === 0) {
            obj.vector.y = speed * -1;
          } else if (obj.vector.y > 0) {
            obj.vector.y *= -1;
          }
          obj.collisionBody.inCollision.cornerArea.bottom.left = true;

          setTimeout(() => {
            obj.collisionBody.inCollision.cornerArea.bottom.left = false;
          }, 20);
        }
      }

      /*
       * CORNER TOP LEFT
       *
       *  (x1, y1)      (x2, y1)
       *           +----------+---------
       *           |          |
       *           |          |
       *           |          |
       *           |          |
       *  (x1, y2) +----------+ (x2, y2)
       *           |
       *           |
       *           |
       *           |
       *
       */

      if (
        (inArea(
          collider.collisionBody.cornerArea.bottom.right.x1,
          obj.collisionBody.cornerArea.top.left.x1,
          obj.collisionBody.cornerArea.top.left.x2
        ) ||
          inArea(
            collider.collisionBody.cornerArea.bottom.right.x2,
            obj.collisionBody.cornerArea.top.left.x1,
            obj.collisionBody.cornerArea.top.left.x2
          )) &&
        (inArea(
          collider.collisionBody.cornerArea.bottom.right.y2,
          obj.collisionBody.cornerArea.top.left.y1,
          obj.collisionBody.cornerArea.top.left.y2
        ) ||
          inArea(
            collider.collisionBody.cornerArea.bottom.right.y1,
            obj.collisionBody.cornerArea.top.left.y1,
            obj.collisionBody.cornerArea.top.left.y2
          ))
      ) {
        if (obj.vector.x === 0) {
          obj.vector.x = speed;
        } else {
          obj.vector.x *= -1;
        }

        if (obj.vector.y === 0) {
          obj.vector.y = speed;
        } else if (obj.vector.y < 0) {
          obj.vector.y *= -1;
        }

        obj.collisionBody.inCollision.cornerArea.top.left = true;

        setTimeout(() => {
          obj.collisionBody.inCollision.cornerArea.top.left = false;
        }, 20);
      }
    });
  });
}

export { handleAllCollisions };
