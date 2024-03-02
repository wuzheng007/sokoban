// 处理界面模块
import showUI from "./ui.js";
// 处理玩的模块
import { playerMove, getGameResult } from "./play.js";

// 显示界面
showUI();

/* 监听键盘按下事件 */
window.onkeydown = (event) => {
  // 获取游戏结果，闯关成功会返回true
  if (getGameResult()) {
    return;
  }
  const { code } = event;
  let isCanMove;
  if (["ArrowUp", "KeyW"].includes(code)) {
    // 上箭头 和 W
    isCanMove = playerMove("top");
  } else if (["ArrowRight", "KeyD"].includes(code)) {
    // 右箭头 和 D
    isCanMove = playerMove("right");
  } else if (["ArrowDown", "KeyS"].includes(code)) {
    // 下箭头和 S
    isCanMove = playerMove("bottom");
  } else if (["ArrowLeft", "KeyA"].includes(code)) {
    // 左箭头 和 A
    isCanMove = playerMove("left");
  }
  // 可以移动，重新显示界面
  if (isCanMove) {
    showUI();
    setTimeout(() => {
      if (getGameResult()) {
        alert("闯关成功！");
      }
    }, 0);
  }
};
