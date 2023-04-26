const quickSort = arr => {
  if (arr.length === 0) {
    return arr;
  }
  const mid = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i += 1) {
    const it = arr[i];
    if (it < mid) {
      left.push(it);
    } else {
      right.push(it);
    }
  }
  return quickSort(left).concat([mid]).concat(quickSort(right));
};
console.log(quickSort([3, 2, 1]));
console.log(quickSort([3]));
console.log(quickSort([]));
