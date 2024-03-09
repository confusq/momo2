/**

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=33170112&pid=8a3efafeccaca698bc911f7830acd1ea&tid=ea8dbe77a3d86ae5db67d3ad74901928",
    
    "https://www.maimemo.com/share/page?uid=6533987&pid=8a3efafeccaca698bc911f7830acd1ea&tid=10cb3b08a06cd6e8be37ac68dad8fdd3",
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
