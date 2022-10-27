/**
 * @param {number[][]} grid
 * @return {number}
 */

// 上下左右四个方向
let coordinates = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
var shortestBridge = function (grid) {
  let result = 0;
  let findIsIand = false; // 只要找到两个岛屿中的其中一个，就更改
  let edges = []; // 存储边缘格子

  // 标记发现的格子
  const markIsIand = function (row, col) {
    if (!isLegal(row, col) || grid[row][col] == 2) {
      return;
    }
    // 边界
    if (grid[row][col] == 0) {
      grid[row][col] = 2; // 将边界向外扩展1层岛屿 (val=2)
      edges.push([row, col]);
      return;
    }
    grid[row][col] = 2; // 为岛屿打标记 (val=2)
    // 深度遍历某个格子的四个方向
    for (let c of coordinates) {
      markIsIand(row + c[0], col + c[1]);
    }
  };

  // 边界合法限定
  const isLegal = function (row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
  };
  // 1. 为其中一个岛屿打标记，并报错边缘格子到edges中
  for (let i = 0; !findIsIand && i < grid.length; i++) {
    for (let j = 0; !findIsIand && j < grid[0].length; j++) {
      // 找到小岛并对小岛及边缘一圈做标记
      if (grid[i][j] == 1) {
        markIsIand(i, j);
        findIsIand = true;
      }
    }
  }

  // 2. 利用边界edges，一层一层扩展岛屿 (val=2)，直到遇到另外一个岛屿 (val=1)
  while (edges.length > 0) {
    result++; // 扩展层数
    let num = edges.length;
    for (let i = 0; i < num; i++) {
      let edge = edges.shift();
      // 向edge的四个方向查看格子的编号，进行岛屿边界的扩展
      for (let c of coordinates) {
        let nex = edge[0] + c[0];
        let ney = edge[1] + c[1];
        if (isLegal(nex, ney) && grid[nex][ney] == 0) {
          edges.push([nex, ney]); // 添加新的边界
          grid[nex][ney] = 2;
        } else if (isLegal(nex, ney) && grid[nex][ney] == 1) {
          // 与另外一个岛屿相遇
          return result;
        }
      }
    }
  }
  return result;
};
