/**
 * 实现一个 Promise.all
 * 面对迭代参数，可以用 Array.from 或者 ... 转为数组
 * 面对非 Promise 对象，可以用 Promise.resolve
 * 只需要在 loop 里执行 Promise 就能并发
 * 注意别忘了 reject
 */

function myPromiseAll(iterable: any) {
  return new Promise((resolve, reject) => {
    const plist = [...iterable];
    let count = 0;
    const res: any[] = [];
    for (let i = 0; i < plist.length; i += 1) {
      const p = plist[i];
      Promise.resolve(p)
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        .then(cur => {
          res[i] = cur;
          count += 1;
          if (count === plist.length) {
            resolve(res);
          }
        })
        .catch(reject);
    }
  });
}
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}
myPromiseAll([sleep(1000), sleep(2000)]).then(console.info);
