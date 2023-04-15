/**
 * 设计 LazyMan 类，实现以下功能。
 * 注意全部用箭头函数，防止this变化。
 * 构建函数里用 settimeout 0 来等所有任务设置后触发
 */

class LazyManClass {
  constructor(name) {
    console.info(`Hi I am ${name}`);
    this.tasks = [];
    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    this.tasks.shift()?.();
  }

  sleepFirst(s) {
    const fn = () => {
      setTimeout(() => {
        this.next();
      }, s * 1000);
    };
    this.tasks.unshift(fn);
    return this;
  }

  sleep(s) {
    const fn = () => {
      setTimeout(() => {
        this.next();
      }, s * 1000);
    };
    this.tasks.push(fn);
    return this;
  }

  eat(food) {
    const fn = () => {
      console.info(`I am eating ${food}`);
      this.next();
    };
    this.tasks.push(fn);
    return this;
  }
}
const LazyMan = name => {
  return new LazyManClass(name);
};

// LazyMan('Tony');
// Hi I am Tony

// LazyMan('Tony').sleep(3).eat('lunch');
// Hi I am Tony
// 等待了3秒...
// I am eating lunch

// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony')
  .eat('lunch')
  .eat('dinner')
  .sleepFirst(5)
  .sleep(10)
  .eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food
