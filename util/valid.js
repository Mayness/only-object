'use strict';
/**
 * 校验单个是否为指定类型
 * @param {*} data 需要校验的值
 * @param {String} type 类型
 * @return {Boolean} 是否符合该类型
 */
const valid = function(data, type) {
  let flag = false;
  const Types = [ 'number', 'string', 'boolean', 'object', 'array', 'null', 'undefined' ];
  if (!Types.includes(type)) {
    throw ReferenceError(`type param is not effective: ${type}`);
  }
  switch (type) {
    case 'object':
      flag = Object.prototype.toString.call(data) === '[object Object]';
      break;
    case 'array':
      flag = Object.prototype.toString.call(data) === '[object Array]';
      break;
    case 'null':
      flag = data === null;
      break;
    default:
      flag = typeof data === type;
      break;
  }
  return flag;
};

/**
 * 校验对象是否为指定类型
 * @param {Object} rules 规则
 * @param {Object} obj 校验对象
 * @return {*} 返回判断值
 */
const validObj = function(rules, obj) {
  for (const item of arguments) {
    if (!valid(item, 'object')) {
      throw TypeError(`params must be object：${item.toString()}`);
    }
  }
  for (const item in obj) {
    if (rules[item] && !valid(obj[item], rules[item])) {
      throw TypeError(`type error: ${JSON.stringify(obj[item])}, must be '${rules[item]}'`);
    }
  }
  return true;
};

module.exports = {
  valid,
  validObj,
};
