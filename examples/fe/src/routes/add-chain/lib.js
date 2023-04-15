/**
 * 实现一个 add
 * add(1)（2）（）=3
 * add(1)（2）（3）（）=6
 * 用珂里化实现链式，之前累加的结果放在第二个可选参数上或者放到 add 函数的某个属性上
 */

// const add = (n, res = 0) => {
//   if (n === undefined) {
//     const tmp = res;
//     return tmp;
//   }
//   return n1 => add(n1, res + n);
// };

const add = n => {
  if (!add.res) {
    add.res = 0;
  }
  if (n === undefined) {
    const tmp = add.res;
    add.res = 0;
    return tmp;
  }
  add.res += n;
  return n1 => add(n1);
};

console.info(add(1)(2)());
console.info(add(1)(2)(3)());
