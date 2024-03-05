/**

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [

    "https://www.maimemo.com/share/page?uid=6533987&pid=679cbb0b11ad3bef6ce1eb542e4fd54a&tid=1a0179c12c7da07caf8bf3f8fb5de1fa",
    "https://www.maimemo.com/share/page?uid=6533987&pid=679cbb0b11ad3bef6ce1eb542e4fd54a&tid=1a0179c12c7da07caf8bf3f8fb5de1fa",
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
