import { useState } from 'react';
import usePrev from './lib';

export default function Page() {
  const [value, setValue] = useState('');
  const prev = usePrev(value);
  return (
    <>
      <input type="text" onChange={e => setValue(e.target.value)} />
      <div>value: {value}</div>
      <div>prev: {prev}</div>
    </>
  );
}
