/**
 * 注意：
 * 用尖括号声明两个泛型
 * 参数是函数时，类型声明是 (arg: T) => R，跟声明变量形式的函数是不同的，变量函数声明是 <T>(arg: T): T
 * @param arr 数组
 * @param cb map 方法
 * @returns 新数组
 */
function myMap<T, R>(arr: T[], cb: (arg: T) => R): R[] {
  const res: R[] = [];
  arr.forEach((it, i) => {
    res[i] = cb(it);
  });
  return res;
}

console.info(myMap([1, 2, 3], x => x + 1));
