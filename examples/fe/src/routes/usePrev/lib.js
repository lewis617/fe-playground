import { useEffect, useRef } from 'react';

const usePrev = value => {
  const prevRef = useRef();
  useEffect(() => {
    // 不会触发组件更新，所以拿到的值还是上次的值
    prevRef.current = value;
  }, [value]);
  return prevRef.current;
};

export default usePrev;
