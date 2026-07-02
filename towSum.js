/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const need = target - currentNumber;

    if (map.hasOwnProperty(need)) {
      return [map[need], i];
    }

    map[currentNumber] = i;
  }
};
