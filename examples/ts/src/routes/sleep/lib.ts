/**
 * @file 返回一个 Promise，并在 ms 毫秒后 Promise 变为完成状态。
 * 注意 Promise 的泛型写法：Promise<undefined>
 */

export function sleep(ms: number): Promise<undefined> {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  console.log('a');
  await sleep(1000);
  console.log('b');
  await sleep(1000);
  console.log('c');
}
main();

export default {};
