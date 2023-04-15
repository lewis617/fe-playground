/**
 * 包装一个高阶函数，模拟发送请求 ，只取最后一次的结果，前面的promise还没完成的话就取消
 */
function wrap(promiseFn: any) {
  // your code
  let abort: any;
  return () => {
    abort?.();
    const p1 = new Promise(resolve => {
      abort = resolve;
    });
    return Promise.race([promiseFn(), p1]);
  };
}

let count = 0;
function sendRequest() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(++count);
    });
  });
}
const newWrap = wrap(sendRequest);
newWrap().then(console.info);
newWrap().then(console.info);
newWrap().then(console.info); // 输出3
