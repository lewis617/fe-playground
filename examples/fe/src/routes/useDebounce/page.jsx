import { useState } from 'react';
import useDebounce from './useDebounce';

export default function Page() {
  const [value, setValue] = useState('');
  const setValueDebounce = useDebounce(setValue, 500);
  return (
    <>
      <input type="text" onChange={e => setValueDebounce(e.target.value)} />
      {value}
    </>
  );
}
