// import { useCallback } from 'react';

import { useRef } from 'react';

// 版本 1:用 useCallback 包一下原版 debounce 即可
// const debounce = (fn, delay) => {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// };

// const useDebounce = (fn, delay) => {
//   return useCallback(debounce(fn, delay), []);
// };

// 版本2:用 useRef 记录 timer，防止闭包丢失，还可以用 useEffect 清除 timer
const useDebounce = (fn, delay) => {
  const timer = useRef();
  return (...args) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default useDebounce;
