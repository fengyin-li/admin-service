/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615441493667_745';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'admin',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.cluster = {
    // listen: {
    //   port: 81,
    //   hostname: '127.0.0.1',
    // },
  };
  config.security = {
    csrf: { enable: false },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*', // 只允许这个域进行访问接口全部为'*'
    credentials: true, // 开启认证
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
