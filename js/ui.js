// 导入地图模块
import {
  SPACE,
  PLAYER,
  WALL,
  BOX,
  content,
  correctPosition,
  blockSize,
  rowNum,
  colNum,
} from "./map.js";

// 地图容器
const container = document.getElementById("game");

// 设置地图样式
function setMapStyle() {
  const { width, height } = blockSize;
  // 设置宽高
  container.style.width = colNum * width + "px";
  container.style.height = rowNum * height + "px";
}
// 设置地图内容
function setMapContent() {
  // 清空地图内容
  container.innerHTML = "";
  // 遍历地图内容数据
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      setBlock(row, col, content[row][col]);
    }
  }
}
/* 设置地图一小块的内容 */
function setBlock(row, col, value) {
  const { width, height } = blockSize;
  const div = document.createElement("div");
  div.classList.add("item");
  div.style.top = row * width + "px";
  div.style.left = col * height + "px";
  if (value === SPACE) {
    // 空白
    if (isCorrect(row, col)) {
      // 在正确位置上的空白
      div.classList.add("correct-position");
    }
  } else if (value === PLAYER) {
    // 玩家
    div.classList.add("player");
  } else if (value === WALL) {
    // 墙
    div.classList.add("wall");
  } else if (value === BOX) {
    // 箱子
    if (isCorrect(row, col)) {
      // 在正确位置上的箱子
      div.classList.add("correct-box");
    } else {
      div.classList.add("box");
    }
  } else {
    throw new Error(value + "是未知的");
  }
  container.appendChild(div);
}
/* 传入行和列，判断是否为正确位置 */
function isCorrect(row, col) {
  return (
    correctPosition.find((item) => item.row === row && item.col === col) !==
    undefined
  );
}

// 此函数用于显示地图，外部调用此函数即可
export default function () {
  // 1. 设置地图样式
  setMapStyle();
  // 2. 设置地图内容
  setMapContent();
}
