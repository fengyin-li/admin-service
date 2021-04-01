'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/getGoodList', controller.good.getGoodList);
  router.post('/addNewGood', controller.good.addNewGood);
  router.post('/editGood', controller.good.editGood);
  router.post('/delGood', controller.good.delGood);
  // io.of('/').route('server', io.controller.home.server);
};
