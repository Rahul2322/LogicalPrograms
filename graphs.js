/*
  Problem Statement: You are given an N x M binary matrix grid, where 0 represents a sea cell and 1 represents a land cell. A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid. Find the number of land cells in the grid for which we cannot walk off the boundary of the grid in any number of moves.
 */

function numberOfEnclaves(grid) {
  const n = grid.length;
  const m = grid[0].length;

  const vis = Array.from({length:n}, () => Array(m).fill(0));
  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 || i == n - 1 || j == 0 || j == m - 1) {
        if (grid[i][j] === 1) {
          queue.push({ row: i, col: j });
          vis[i][j] = 1;
        }
      }
    }
  }

  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];

  while (queue.length > 0) {
    const { row, col } = queue.shift();
    for (let i = 0; i < 4; i++) {
      const newRow = row + delRow[i];
      const newCol = col + delCol[i];
      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < m &&
        grid[newRow][newCol] === 1 &&
        vis[newRow][newCol] == 0
      ) {
        queue.push({ row: newRow, col: newCol });
        vis[newRow][newCol] = 1;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1 && vis[i][j] == 0) {
        count++;
      }
    }
  }
  return count;
}

const grid = [
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
];

const solution = numberOfEnclaves(grid);
console.log(solution);
