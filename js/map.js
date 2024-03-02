// 地图内容常量
export const SPACE = 0; // 空白
export const PLAYER = 1; // 玩家
export const WALL = 2; // 墙
export const BOX = 3; // 箱子

/**
 * 地图内容数据
 * 0. 空白
 * 1. 玩家
 * 2. 墙
 * 3. 箱子
 */
export const content = [
  [0, 0, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 2, 0, 1, 0, 2, 0, 0],
  [0, 0, 2, 0, 3, 0, 2, 0, 0],
  [2, 2, 2, 0, 0, 0, 2, 2, 2],
  [2, 0, 0, 0, 3, 0, 0, 0, 2],
  [2, 0, 3, 3, 3, 3, 3, 0, 2],
  [2, 0, 0, 0, 3, 0, 0, 0, 2],
  [2, 2, 0, 3, 3, 3, 0, 2, 2],
  [0, 2, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 0, 0, 3, 0, 0, 2, 0],
  [0, 2, 0, 0, 0, 0, 0, 2, 0],
  [0, 2, 2, 2, 2, 2, 2, 2, 0],
];

// 地图每一块的大小
export const blockSize = {
  width: 45,
  height: 45,
};

// 地图行数
export const rowNum = content.length;
// 地图列数
export const colNum = content[0].length;

/**
 * 地图上的正确位置
 * 正常是显示边框，如果箱子在正确位置上，颜色和正常的箱子显示不同
 */
export const correctPosition = [
  { row: 3, col: 4 },
  { row: 4, col: 4 },
  { row: 5, col: 2 },
  { row: 5, col: 3 },
  { row: 5, col: 4 },
  { row: 5, col: 5 },
  { row: 5, col: 6 },
  { row: 6, col: 4 },
  { row: 7, col: 4 },
  { row: 8, col: 4 },
  { row: 9, col: 4 },
  { row: 10, col: 4 },
];
