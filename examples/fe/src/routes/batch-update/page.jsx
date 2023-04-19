import { useEffect, useState } from 'react';

/**
 * React 18 后，不只是在 React 事件里，在 setTimeout 里重复 set 也会合并了，不会触发多次组件更新
 */
export default function Page() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(1);
      setCount(2);
      setCount(3);
    });
  }, []);
  console.info(count);

  return (
    <>
      <div>count: {count}</div>
    </>
  );
}
