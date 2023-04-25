function compose(...middlewares) {
  return ctx => {
    const dispatch = async i => {
      if (i === middlewares.length) {
        return;
      }
      await middlewares[i](ctx, () => dispatch(i + 1));
    };
    return dispatch(0);
  };
}

async function middleware1(ctx, next) {
  console.log('Middleware 1 before');
  await next();
  console.log('Middleware 1 after');
}

async function middleware2(ctx, next) {
  console.log('Middleware 2 before');
  await next();
  console.log('Middleware 2 after');
}

async function middleware3(ctx, next) {
  console.log('Middleware 3 before');
  await next();
  console.log('Middleware 3 after');
}

const fn = compose(middleware1, middleware2, middleware3);

fn({}).catch(err => console.error(err));
