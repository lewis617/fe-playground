import { useEffect, useState } from 'react';

/**
 * 初始化：三个 render 三个 mount，因为 mount 是挂载到 DOM 的意思，是异步的。
 * 点击 button：三个 render，一个 unmount，一个 mount。1、3、4 先 render，
 * 1、3 因为 key 没变，根据 diff 算法只是移动，不需要重新 mount，2 unmount，4 mount。
 */
function Card({ v }) {
  console.info('render', v);
  useEffect(() => {
    console.info('mount', v);
    return () => {
      console.info('unmount', v);
    };
  }, []);

  return <div>Card</div>;
}

export default function CardList() {
  const [list, setlist] = useState([1, 2, 3]);
  console.info('render', 'CardList');
  useEffect(() => {
    console.info('mount', 'CardList');
    return () => {
      console.info('unmount', 'CardList');
    };
  }, []);
  return (
    <div>
      {list.map(it => (
        <Card key={it} v={it} />
      ))}
      <button onClick={() => setlist([1, 3, 4])}>setlist</button>
    </div>
  );
}
