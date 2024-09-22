# LeetCode Problems

## 743. Network Delay Time

You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

```
Example 1:
Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
```

### Steps I took

1. Tried to understand the problem, already having hard time to visualize the problem.

2. Started drawing the diagram to help understand what the problem wants.

3. Started brainstorming what kind of algorithm I can use for the problem.

4. Tried to go through the class notes to find what I could use to solve it.

5. Came up with idea of using _Dijkstra algorithm_.

6. Started searching up pseudo code.

7. Completely lost how to adapt the algorithms into the solution.

8. Got a hint from other people's solution, trying to make graph.

9. Faced runtime error wrong answer with first attempt.

```js
var networkDelayTime = function (times, n, k) {
  const graph = {};
  for (let i = 1; i < n; i++) {
    graph[i] = {};
  }
  for (const [u, v, w] of times) {
    graph[u][v] = w;
  }

  const distances = {};
  const queue = [];
  const visited = new Set();

  for (let node in graph) {
    if (node === n) {
      distances[node] = 0;
      queue.push([node, 0]);
    } else {
      distances[node] = Infinity;
    }
  }

  while (queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);
    const [currentNode] = queue.shift();

    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    for (let neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const newDistance = distances[currentNode] + weight;
      const oldDistance = distances[neighbor];

      if (newDistance < oldDistance) {
        distances[neighbor] = newDistance;
        queue.push([neighbor, newDistance]);
      }
    }
  }
  return distances;
};
```

10. Tried to console.log in between code, could not find why I was keep failing at all.

11. Realized I was just returning the whole object.

12. Re-write code to find Max Distance to return.

```js
var networkDelayTime = function (times, n, k) {
  // ...same code above
  let maxDistance = 0;
  for (const node in distances) {
    if (distances[node] > maxDistance) {
      maxDistance = distances[node];
    }
  }

  return maxDistance === Infinity ? -1 : maxDistance;
};
```

13. Getting wrong answers, tried to debug but failed.

14. Used ChatGPT what would be the problems.

15. Found the source of the error, iterating approach was and changing the code.

```js
for (let node in graph) {
  if (node === n) {
    distances[node] = 0;
    queue.push([node, 0]);
  } else {
    distances[node] = Infinity;
  }
}

// to
for (let node = 1; node <= n; node++) {
  if (node === k) {
    distances[node] = 0;
    queue.push([node, 0]);
  } else {
    distances[node] = Infinity;
  }
}
```

16. Everything works, however, still not fully understood about why iterating approach is different.

## 912. Sort Array

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
