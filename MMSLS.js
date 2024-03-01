/**

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [

    "https://www.maimemo.com/share/page?uid=6533987&pid=fcfe17ef10f3f2a0eec7752198b30238&tid=d83339681cdb2fbc249c618aca6e2f52",
    "https://www.maimemo.com/share/page?uid=6533987&pid=fcfe17ef10f3f2a0eec7752198b30238&tid=d83339681cdb2fbc249c618aca6e2f52",
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
