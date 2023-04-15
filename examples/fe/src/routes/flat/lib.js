/**
 * 实现一个 flat
 * 支持传递 dep 参数
 */

Array.prototype.myFlat = function (dep = 1) {
  let res = [];
  this.forEach(it => {
    if (!it) {
      return;
    }
    res =
      Array.isArray(it) && dep > 1
        ? res.concat(it.myFlat(dep - 1))
        : res.concat(it);
  });
  return res;
};

const arr6 = [
  1,
  undefined,
  [3, undefined, [5, undefined, [7, undefined, [9, 10], 11], 12], 13],
  14,
  15,
  [16, 17, [18, 19, [20, 21, [22, 23], 24], 25], 26],
  27,
  28,
];
console.info(arr6.myFlat(Infinity));
