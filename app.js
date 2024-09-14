var sortArray = function (nums) {
  function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < left.length && j < right.length) {
      if (right[j] > left[i]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    while (j < right.length) {
      result.push(right[j]);
      j++;
    }
    while (i < left.length) {
      result.push(left[i]);
      i++;
      console.log(i);
    }
    console.log(result);

    return result;
  }

  function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSort(nums.slice(mid));
    console.log(left, right);
    return merge(left, right);
  }

  return mergeSort(nums);
};

let nums = [5, 2, 3, 1];

console.log(sortArray(nums));
