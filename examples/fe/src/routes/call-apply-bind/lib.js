/**
 * 实现 call apply bind
 * 通过将函数临时挂到 context 来指定 this
 */

Function.prototype.call2 = function (context_, ...args) {
  const context =
    context_ === null || context_ === undefined ? globalThis : context_;
  context._fn = this;
  const res = context._fn(...args);
  delete context._fn;
  return res;
};

Function.prototype.apply2 = function (context_, ...args) {
  const context =
    context_ === null || context_ === undefined ? globalThis : context_;
  context._fn = this;
  const res = context._fn(...args);
  delete context._fn;
  return res;
};

Function.prototype.bind2 = function (context_, ...args) {
  const context =
    context_ === null || context_ === undefined ? globalThis : context_;
  return (...args2) => {
    context._fn = this;
    context._fn(...args, ...args2);
    delete context._fn;
  };
};
