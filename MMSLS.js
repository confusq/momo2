/**

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [

"https://www.maimemo.com/share/page?uid=6533987&pid=278b5e384c1ac290a5b3fe558e21ddfc&tid=1b3e7e93bf4aa063c383c7d3a78d3fc1",
    "https://www.maimemo.com/share/page?uid=6533987&pid=278b5e384c1ac290a5b3fe558e21ddfc&tid=1b3e7e93bf4aa063c383c7d3a78d3fc1",
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
