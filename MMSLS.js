/**

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [

    "https://www.maimemo.com/share/page?uid=6533987&pid=54cff3eb216fcdeed11c6c15b5c106eb&tid=91d13fb96ef464ecbcbd1109ea57ea13",
    "https://www.maimemo.com/share/page?uid=6533987&pid=54cff3eb216fcdeed11c6c15b5c106eb&tid=91d13fb96ef464ecbcbd1109ea57ea13",
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
