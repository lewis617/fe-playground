type MyPick<T, U extends keyof T> = {
  [P in U]: T[P];
};

interface Test {
  a: string;
  b: number;
}

const testPick: MyPick<Test, 'a'> = { a: 'str' };
// const testPickError: MyPick<Test, 'a'> = { b: 1 };
console.log(testPick);
