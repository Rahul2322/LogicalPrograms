/**
 * 
Given a connected undirected graph represented by an adjacency list adj, which is a vector of vectors where each adj[i] represents the list of vertices connected to vertex i. Perform a Breadth First Traversal (BFS) starting from vertex 0, visiting vertices from left to right according to the adjacency list, and return a list containing the BFS traversal of the graph.

Note: Do traverse in the same order as they are in the adjacency list.
 */

function bfs(adj) {
  const queue = [0];
  const vis = [true];
  const res = [];
  while (queue.length > 0) {
    const currEle = queue.shift();
    res.push(currEle);
    const currList = adj[currEle];
    for (let i = 0; i < currList.length; i++) {
      if (!vis[currList[i]]) {
        vis[currList[i]] = true;
        queue.push(currList[i]);
      }
    }
  }
  return res;
}

console.log(bfs([[2, 3, 1], [0], [0, 4], [0], [2]]));

/**
 * 
Given a connected undirected graph represented by an adjacency list adj, which is a vector of vectors where each adj[i] represents the list of vertices connected to vertex i. Perform a Depth First Traversal (DFS) starting from vertex 0, visiting vertices from left to right as per the adjacency list, and return a list containing the DFS traversal of the graph.

Note: Do traverse in the same order as they are in the adjacency list.
 */

function dfs(adj) {
  const vis = [];
  const res = [];

  function helper(adj, vis, res, node) {
    vis[node] = true;
    res.push(node);

    const currList = adj[node];
    for (let i = 0; i < currList.length; i++) {
      if (!vis[currList[i]]) {
        vis;
        helper(adj, vis, res, currList[i]);
      }
    }
  }
  helper(adj, vis, res, 0);
  return res;
}

console.log(dfs([[2, 3, 1], [0], [0, 4], [0], [2]]));

/**
 * 
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
 */

function findCircleNum(isConnected) {
  const n = isConnected.length;
  const vis = [];
  let count = 0;
  const adjlist = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] == 1 && i !== j) {
        adjlist[i].push(j);
        adjlist[j].push(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!vis[i]) {
      count++;
      dfs(adjlist, vis, i);
    }
  }

  function dfs(adjLis, vis, node) {
    vis[node] = true;
    const currList = adjLis[node];
    for (let i = 0; i < currList.length; i++) {
      if (!vis[currList[i]]) {
        dfs(adjLis, vis, currList[i]);
      }
    }
  }
  return count;
}

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);

/**
 * 
 * @param {*} grid 
 * @returns 
 * Given a grid of size n*m (n is the number of rows and m is the number of columns in the grid) consisting of '0's (Water) and '1's(Land). Find the number of islands.

Note: An island is either surrounded by water or the boundary of a grid and is formed by connecting adjacent lands horizontally or vertically or diagonally i.e., in all 8 directions.
 */

function numIslands(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const vis = Array.from({ length: n }, () => Array(m).fill(0));
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1 && vis[i][j] !== 1) {
        count++;
        bfs(grid, vis, i, j);
      }
    }
  }

  function bfs(grid, vis, row, col) {
    vis[row][col] = 1;
    const queue = [{ row, col }];
    while (queue.length > 0) {
      const { row, col } = queue.shift();
      for (let delRow = -1; delRow <= 1; delRow++) {
        for (let delCol = -1; delCol <= 1; delCol++) {
          const nrow = row + delRow;
          const ncol = col + delCol;
          if (
            nrow >= 0 &&
            nrow < n &&
            ncol >= 0 &&
            ncol < m &&
            grid[nrow][ncol] == 1 &&
            vis[nrow][ncol] !== 1
          ) {
            queue.push({ row: nrow, col: ncol });
            vis[nrow][ncol] = 1;
          }
        }
      }
    }
  }

  return count;
}

console.log(
  numIslands([
    [0, 1],
    [1, 0],
    [1, 1],
    [1, 0],
  ])
);

/**
 * You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill:

Begin with the starting pixel and change its color to color.
Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
The process stops when there are no more adjacent pixels of the original color to update.
Return the modified image after performing the flood fill.
 */

function floodFill(image, sr, sc, color) {
  const n = image.length;
  const m = image[0].length;
  const vis = JSON.parse(JSON.stringify(image));

  const iniColor = image[sr][sc];
  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];

  dfs(sr, sc, image, vis, delRow, delCol, iniColor, color);

  function dfs(row, col, image, vis, delRow, delCol, iniColor, color) {
    vis[row][col] = color;
    for (let i = 0; i < 4; i++) {
      const nrow = row + delRow[i];
      const ncol = col + delCol[i];
      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        image[nrow][ncol] == iniColor &&
        vis[nrow][ncol] !== color
      ) {
        dfs(nrow, ncol, image, vis, delRow, delCol, iniColor, color);
      }
    }
  }
  return vis;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);

/**
 * 
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 */

function orangesRotting(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const queue = [];
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (grid[row][col] == 2) {
        queue.push({ row, col, t: 0 });
      }
    }
  }
  let tm = 0;
  const delRow = [-1, 0, 1, 0];
  const delCol = [0, 1, 0, -1];
  while (queue.length > 0) {
    const { row, col, t } = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nrow = row + delRow[i];
      const ncol = col + delCol[i];
      tm = Math.max(tm, t);
      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        grid[nrow][ncol] == 1
      ) {
        grid[nrow][ncol] = 2;
        queue.push({ row: nrow, col: ncol, t: t + 1 });
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) return -1;
    }
  }

  return tm;
}

/**
 * 
Given an undirected graph with V vertices labelled from 0 to V-1 and E edges, check whether the graph contains any cycle or not. The Graph is represented as an adjacency list, where adj[i] contains all the vertices that are directly connected to vertex i.

NOTE: The adjacency list represents undirected edges, meaning that if there is an edge between vertex i and vertex j, both j will be adj[i] and i will be in adj[j].
 */


function isCycle(adj) {
  // code here
  const v = adj.length;
  const vis = Array(v).fill(0);
  for(let i=0;i<v;i++){
    if(!vis[i]){
      if(detectCycle(i,adj,vis)) return true;
    }
  }
  function detectCycle(src,adj,vis){
    vis[src]  = 1;
    const queue = [{node:src,parent:-1}];
    while(queue.length > 0){
      const {node,parent} = queue.shift();
      for (const neighbor of adj[node]) {
        if (!vis[neighbor]) {
          vis[neighbor] = 1;
          queue.push({ node: neighbor, parent: node });
        } else if (neighbor !== parent) {
          return true; 
        }
      }
    }
    return false;
  }

  return false;
}

console.log(isCycle([[], [2], [1,3], [2]]));


/*
  Problem Statement: You are given an N x M binary matrix grid, where 0 represents a sea cell and 1 represents a land cell. A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid. Find the number of land cells in the grid for which we cannot walk off the boundary of the grid in any number of moves.
 */

function numberOfEnclaves(grid) {
  const n = grid.length;
  const m = grid[0].length;

  const vis = Array.from({ length: n }, () => Array(m).fill(0));
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
  [0, 0, 0, 0],
];

const solution = numberOfEnclaves(grid);
console.log(solution);
