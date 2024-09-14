# LeetCode Problems

## Sort Array

Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

```
Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
```

### Steps I took

1. Tried understand the problem.

2. Went through the examples.

3. Thought about what method I should use, suitable for this problem.

4. Came up with an idea of **merge sort** would be ideal for this problem, lately learned in class.

5. Started writing the solution code based on the algorithm we wrote.

6. First, I wrote the code as below and faced error undefined.

```js
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
      result.push(right[i]);
      i++;
    }

    return result;
  }

  function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = mergeSort(nums.slice(0, mid));
    const right = mergeSOrt(nums.slice(mid));

    return merge(left, right);
  }
};
```

7. Spotted typo in `mergeSOrt` in function mergeSort

8. Spotted wrote down `right[i]` where needed to be `left[i]`

9. Still faced undefined error, totally lost what was happening.

10. Then, I realized I was not executing and returning anything. Added `return mergeSort(nums)`.

11. Everything worked out, then I asked chatGPT to see if I can improve/optimize the code.

12. Lastly, changed comparison `right[j] > left[i]` to `left[i] <= right[j]` to have stable sorting.

13. Submitted final version.
