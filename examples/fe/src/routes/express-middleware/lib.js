class App {
  constructor() {
    this.fnList = [];
  }

  use(fn) {
    this.fnList.push(fn);
  }

  run() {
    // 中间件逆序，然后 reduce。注意只能用 reduce，用变量加循环会出现死循环
    const main = this.fnList.reverse().reduce(
      (last, cur) => {
        return () => cur(last);
      },
      () => null,
    );
    main();
  }
}
const app = new App();

app.use(next => setTimeout(() => next(), 1000));

app.use(next => {
  console.log(123);

  next();
});

app.run(); // 500ms -> 123
