/**

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [

"https://www.maimemo.com/share/page?uid=6533987&pid=54c96370dff75dffbfb115b8f945f5fd&tid=5afd6f06b3ff77c368513f72c9bf647d",
    "https://www.maimemo.com/share/page?uid=33170112&pid=54c96370dff75dffbfb115b8f945f5fd&tid=d1398fb23d198c0a65b08a636fe11372",
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
