/**
 * 实现一个前端请求模块，可以缓存 xhr 返回的结果，要求：
 * 如果有相同的请求同时并行发起，要求其中一个能挂起并且等待另外一个请求返回并读取该缓存
 */

const promiseFn = async url => {
  console.info(`request ${url}`);
  return url;
};

const lookup = new Map();
const request = url => {
  let p = lookup.get(url);
  if (!p) {
    p = promiseFn(url);
    lookup.set(url, p);
  }
  return p;
};

request('/users').then(r => console.info(r));
request('/users').then(r => console.info(r));
request('/users').then(r => console.info(r));
request('/users').then(r => console.info(r));
