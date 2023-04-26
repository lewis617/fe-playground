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

  /**
   * 算法二：使用 dispatch(i)，用 () => dispatch(i + 1) 模拟 next
   */
  run2() {
    const dispatch = i => {
      if (i === this.fnList.length) {
        return;
      }
      this.fnList[i](() => dispatch(i + 1));
    };
    dispatch(0);
  }
}
const app = new App();

app.use(next => setTimeout(() => next(), 1000));

app.use(next => {
  console.log(123);

  next();
});

// app.run(); // 500ms -> 123
app.run2(); // 500ms -> 123
