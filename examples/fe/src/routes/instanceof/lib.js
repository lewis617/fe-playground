/**
 * 实现 instanceOf
 * __proto__ 已经废弃，使用 Object.getPrototypeOf
 */

const myInstanceOf = (left, right) => {
  let p = left;
  while (p) {
    p = Object.getPrototypeOf(p);
    if (p === right.prototype) {
      return true;
    }
  }
  return false;
};

console.info(myInstanceOf({}, Object));
console.info(myInstanceOf({}, Array));
console.info(myInstanceOf([], Array));
class A {}
class B {}
const a = new A();
console.info(myInstanceOf(a, A));
console.info(myInstanceOf(a, B));
