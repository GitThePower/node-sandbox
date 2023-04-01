const binarySearch = (nums, target) => {
  let startVal = 0;
  let endVal = nums.length;
  while (endVal > startVal + 1) {
    let midVal = Math.floor((endVal - startVal) / 2) + startVal;
    if (nums[midVal] === target) {
      return midVal;
    } else if (nums[midVal] > target) {
      endVal = midVal;
    } else {
      startVal = midVal;
    }
  }
  return -1;
};

module.exports = {
  binarySearch,
};
