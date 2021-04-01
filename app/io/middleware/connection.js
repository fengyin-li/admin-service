'use strict';

module.exports = app => {
  return async (ctx, next) => {
    console.log('中间件connnection');
    await next();
    console.log('disconnection!');
  };
};
