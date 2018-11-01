'use strict';
const { filter, reduce } = require('..');
const expect = global.expect;

describe('test only-object', () => {
  const obj = {
    a: 1,
    b: '2',
    c: true,
    d: { h: 1 },
  };

  test('test filter', () => {
    expect(filter(obj, [ 'a', 'c' ])).toEqual({ a: 1, c: true });
    expect(filter(obj, [ 'b', 'wrongKey' ])).toEqual({ b: '2' });
    expect(filter(obj, [])).toEqual({});
    expect(filter({}, [ 'a', 'b' ])).toEqual({});
  });

  test('test reduce', () => {
    expect(reduce(obj, [ 'a', 'c' ])).toEqual({ b: '2', d: { h: 1 } });
    expect(reduce(obj, [ 'b', 'wrongKey' ])).toEqual({ a: 1, c: true, d: { h: 1 } });
    expect(reduce(obj, [])).toEqual({ a: 1, b: '2', c: true, d: { h: 1 } });
    expect(filter({}, [ 'a', 'b' ])).toEqual({});
  });
});
