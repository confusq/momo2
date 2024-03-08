/**

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [

"https://www.maimemo.com/share/page?uid=6533987&pid=71a93b75a4a016ad4ef6b8243b89d7a1&tid=b4a3606f321f95809dd9040775c17e12",
    "https://www.maimemo.com/share/page?uid=6533987&pid=71a93b75a4a016ad4ef6b8243b89d7a1&tid=b4a3606f321f95809dd9040775c17e12",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
