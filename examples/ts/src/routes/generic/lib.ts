/**
 * 泛型例子，在小括号前用尖括号声明T，函数的返回值的类型在小括号后面用冒号声明
 * @param arg 任意类型
 * @returns 和 arg 相同类型
 */
function identify<T>(arg: T): T {
  return arg;
}

identify('str');
identify(123);
identify(undefined);
