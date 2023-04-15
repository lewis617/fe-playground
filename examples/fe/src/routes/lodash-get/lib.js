/**
 * 实现 lodash.get
 */

const getKey = (obj, pathStr) => {
  const path = pathStr.replace(/\[/g, '.').replace(/\]/g, '').split('.');
  let p = obj;
  path.forEach(it => {
    p = p[it];
  });
  return p;
};

const obj = {
  a: {
    b: 123,
  },
  arr: [
    {
      demo: 'demo',
    },
  ],
};
console.info(getKey(obj, 'a.b'));
console.info(getKey(obj, 'arr[0].demo'));
