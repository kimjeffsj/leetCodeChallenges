function networkDelayTime(times, n, k) {
  const graph = {};
  for (let i = 1; i <= n; i++) {
    graph[i] = {};
  }
  for (const [u, v, w] of times) {
    graph[u][v] = w;
  }

  const distances = {};
  const queue = [];
  const visited = new Set();

  for (let node = 1; node <= n; node++) {
    if (node === k) {
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

    for (const neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const newDistance = distances[currentNode] + weight;
      const oldDistance = distances[neighbor];

      if (newDistance < oldDistance) {
        distances[neighbor] = newDistance;
        queue.push([neighbor, newDistance]);
      }
    }
  }

  let maxDistance = 0;
  for (const node in distances) {
    if (distances[node] > maxDistance) {
      maxDistance = distances[node];
    }
  }

  return maxDistance === Infinity ? -1 : maxDistance;
}
