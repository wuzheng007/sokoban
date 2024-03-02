import {
  SPACE,
  PLAYER,
  WALL,
  BOX,
  content,
  correctPosition,
  rowNum,
  colNum,
} from "./map.js";
/* 玩家移动处理，返回一个Boolean，表示是否可以移动 */
export function playerMove(direction) {
  const { row, col } = getPlayerPosition();
  // 玩家位置信息
  const playerPositionInfo = { row, col, value: PLAYER };
  // 玩家下一个位置的信息
  const nextPositionInfo = getNextPositionInfo(row, col, direction);
  if (nextPositionInfo.value === SPACE) {
    switchPosition(playerPositionInfo, nextPositionInfo); // 交换玩家和下一位置
    return true;
  } else if (nextPositionInfo.value === WALL) {
    // 墙
    return false;
  } else if (nextPositionInfo.value === BOX) {
    // 箱子
    // 解构玩家下个位置的信息
    const { row, col } = nextPositionInfo;
    // 得到玩家下下个位置的信息
    const nextNextPositionInfo = getNextPositionInfo(row, col, direction);
    // 下下个位置是空白位置
    if (nextNextPositionInfo.value === SPACE) {
      // 下个位置和下下个位置交换
      switchPosition(nextPositionInfo, nextNextPositionInfo);
      // 交换玩家和下一位置
      switchPosition(playerPositionInfo, nextPositionInfo);
      return true;
    } else {
      return false;
    }
  }
}

// 交换位置 position1 和 position1 交换
function switchPosition(position1, position2) {
  const { row: row1, col: col1 } = position1;
  const { row: row2, col: col2 } = position2;
  const temp = content[row1][col1];
  content[row1][col1] = content[row2][col2];
  content[row2][col2] = temp;
}

/* 获取游戏结果，判断是否闯关成功 */
export function getGameResult() {
  return correctPosition.every(({ row, col }) => content[row][col] === BOX);
}

// 获取玩家当前位置, 返回一个对象 { row: x, col: y }
function getPlayerPosition() {
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      if (content[row][col] === PLAYER) {
        return { row, col };
      }
    }
  }
  throw new Error("地图上未找到玩家！");
}

// 根据当前位置（行数和列数）和方向，获取下一个位置的信息({row: x, col: y, value: value})
function getNextPositionInfo(rowNum, colNum, direction) {
  let row;
  let col;
  switch (direction) {
    case "top":
      row = rowNum - 1;
      col = colNum;
      break;
    case "right":
      row = rowNum;
      col = colNum + 1;
      break;
    case "bottom":
      row = rowNum + 1;
      col = colNum;
      break;
    case "left":
      row = rowNum;
      col = colNum - 1;
      break;
  }
  return {
    row,
    col,
    value: content[row][col],
  };
}
