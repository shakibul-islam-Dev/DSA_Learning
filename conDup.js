function containsDuplicate(nums) {
  const number = new Map();
  for (let i = 0; i < nums.length; i++) {
    let newMap = nums[i];
    if (number.has(newMap)) {
      return true;
    }
    number.set(newMap, true);
  }
  return false;
}
