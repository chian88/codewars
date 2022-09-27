function validSolution(board) {
  //TODO


  if (!validRow(board)) {
    return false;
  }

  if (!validCol(board)) {
    return false;
  }

  if (!validSquare(board)) {
    return false;
  }

  return true;
}

function validSquare(board) {
  let top = 0;
  let left = 0;

  let count = 0;

  while (count < 81) {
    const set = new Set();
    set.add(0);
    for (let i = top; i < top + 3; i++) {
      for (let j = left; j < left + 3; j++) {
        count++;
        if (set.has(board[i][j])) {
          return false;
        }

        set.add(board[i][j]);
      }
    }

    left += 3;


    if (left >= 9) {
      left = 0;
      top += 3;
    }
  }

  return true;
}

function validRow(board) {
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    set.add(0);
    for (let j = 0; j < board[0].length; j++) {
      if (set.has(board[i][j])) {
        return false;
      }

      set.add(board[i][j]);
    }
  }

  return true;
}

function validCol(board) {
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    set.add(0);
    for (let j = 0; j < board[0].length; j++) {
      if (set.has(board[j][i])) {
        return false;
      }

      set.add(board[j][i]);
    }
  }

  return true;
}

const result = validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]);

console.log(result)