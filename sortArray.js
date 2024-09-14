/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }

    return result;
  }

  function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));

    return merge(left, right);
  }

  return mergeSort(nums);
};
