/**
 * 实现一个 Promise.all 增强版
 * 入参 tasks: runner[], runner:(task) => Promise, limit: number 最大同时执行任务数为limit个
 */

function myPromiseAll(iterable, limit = Infinity) {
  return new Promise((resolve, reject) => {
    const plist = [...iterable];
    let count = 0;
    let startCount = 0;
    const res: any[] = [];
    const rec = i => {
      if (i === plist.length) {
        return;
      }
      console.info(i);
      const p = plist[i];
      startCount += 1;
      p()
        .then(cur => {
          res[i] = cur;
          count += 1;
          if (count === plist.length) {
            resolve(res);
          }
          rec(startCount);
        })
        .catch(reject);
    };
    for (let i = 0; i < Math.min(plist.length, limit); i += 1) {
      rec(i);
    }
  });
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}
myPromiseAll(
  [() => sleep(1000), () => sleep(1000), () => sleep(1000), () => sleep(1000)],
  2,
).then(console.info);
