'use strict';
const { validObj } = require('./util/valid');

const valid = function(obj, filter) {
  const rules = {
    obj: 'object',
    filter: 'array',
  };
  validObj(rules, { obj, filter });
};


/**
 * 过滤指定的key( 得到指定的key )
 * @param {Object} obj 过滤对象
 * @param {Array} filter 指定的过滤数组
 * @return {Object} 过滤结果对象
 */
const filter = function(obj, filter) {
  valid(...arguments);
  const newObj = {};
  const keys = Object.keys(obj);
  for (const item of filter) {
    if (keys.includes(item)) {
      newObj[ item ] = obj[ item ];
    }
  }
  return newObj;
};

/**
 * 删除指定的key，得到一个新对象
 * @param {Object} obj 过滤对象
 * @param {Array} reduce 指定的过滤数组
 * @return {Object} 过滤结果对象
 */
const reduce = function(obj, reduce) {
  valid(...arguments);
  const newObj = {};
  for (const item in obj) {
    if (!reduce.includes(item)) {
      newObj[ item ] = obj[ item ];
    }
  }
  return newObj;
};

module.exports = {
  filter,
  reduce,
};
