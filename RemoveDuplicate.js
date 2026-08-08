/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = nums;
  var array = [];
  for (let i = 0; i < k.length; i++) {
    for (let j = i + 1; j < k.length; j++) {
      if (k[i] != k[j]) {
        array.push(k[i]);
      }
    }
  }
};
