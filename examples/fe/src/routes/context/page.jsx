import { createContext, useContext } from 'react';

const MyContext = createContext();
const Comp1 = () => <Comp2 />;
const Comp2 = () => {
  const myContext = useContext(MyContext);
  return <pre>{JSON.stringify(myContext)}</pre>;
};
export default function page() {
  return (
    <MyContext.Provider value={{ a: 1 }}>
      <Comp1 />
    </MyContext.Provider>
  );
}
