/**
 * 实现 Promise.finally
 * 1、then和catch都掉用。2、如果 finally 是 promise 走完才走 then/catch。3、finally 只是一个钩子，不接受参数，不改变返回值
 */

Promise.prototype.finally2 = function (cb) {
  return this.then(async res => {
    await cb();
    return res;
  }).catch(async err => {
    await cb();
    throw err;
  });
};

Promise.resolve(123).finally(res => {
  console.info(res);
  return 123;
});

Promise.reject(new Error('test')).finally(res => {
  console.info(res);
  return 123;
});

Promise.resolve(123).finally2(res => {
  console.info(res);
  return 123;
});

Promise.reject(new Error('test')).finally2(res => {
  console.info(res);
  return 123;
});
