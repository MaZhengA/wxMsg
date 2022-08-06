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
  config.keys = appInfo.name + '_1632111171422_6113';

  // add your middleware config here
  config.middleware = [];
  // 天气接口配置
  config.weather = {
    appid: '72411552',
    appsecret: 'f1XQV05H'
  };
  // 测试 微信公众号
  config.weChat = {
    appld: 'wxa041c01116941f85',
    secret: 'ffe187bf1164e559a5e9cc89895417da',
    // 用户的openid
    users: [
      'oAtrW5od0BJd6CZ3a8UvjKHGdO9k'
    ],
    daily: 'UgXlEzkcxm3Il1BWyKhEjro2Y2J2rtVx2DVDR-M_flQ', // 普通模板
    birthday: 'WbplJKGOWOLzUJuM0zqx6jw4DdwO1ZH9E2T_kerTj4A'
  };

  // 时间
  config.time = {
    wageDay: 15, // 工资日
    love: '2015-05-24', // 相爱日期
    // 生日配置
    birthday: {
      2022: '2022-05-20',
      2023: '2023-05-10',
      2024: '2024-04-29',
      2025: '2025-04-18'
    }, // 每年生日 阳历
    birthYear: 1997,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
