snail = function (array) {
  // enjoy

  let top, left = 0;
  let right, down = array.length;
  let count = 0;
  let total = array.length * array.length;
  let result = [];

  while (count < total) {
    // top left to top right
    for (let j = left; j < right; j++) {
      result[count++] = array[top][j];
    }

    // top right to bottom right
    for (let i = top + 1; i < down; i++) {
      result[count++] = array[i][right];
    }

    // bottom right to bottom left
    for (let j = right - 1; j >= left; j--) {
      result[count++] = array[bottom][j];
    }

    // bottom left to top left
    for (let i = bottom - 1; i > top; i--) {
      result[count++] = array[i][left];
    }

  }

  return result;
}

