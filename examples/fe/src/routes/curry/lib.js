/**
 * 实现一个 curry
 * fn.length 代表函数参数个数
 * 递归消费参数，直到参数个数凑够 fn 的参数个数，然后执行 fn
 */

function add(a, b, c) {
  return a + b + c;
}
function curry(fn) {
  const rec = (...args1) => {
    if (args1.length === fn.length) {
      return fn(...args1);
    }
    return (...args2) => rec(...args1, ...args2);
  };
  return rec;
}

const addCurry = curry(add);
const res1 = addCurry(1, 2)(3);
const res2 = addCurry(1)(2)(3);
console.info(res1);
console.info(res2);
