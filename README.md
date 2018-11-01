# only-object

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

name：Mayness
project：only-object

[npm-image]: https://img.shields.io/npm/v/${project}.svg?style=flat-square
[npm-url]: https://npmjs.org/package/${project}
[travis-image]: https://img.shields.io/travis/${name}/${project}.svg
[travis-url]: https://travis-ci.org/${name}/${project}
[codecov-image]: https://img.shields.io/codecov/c/github/${name}/${project}.svg?style=flat-square
[codecov-url]: https://codecov.io/github/${name}/${project}?branch=master

filter object tool

## Usage

```
const onlyObject = require('only-object');
const obj = {
  a: 1,
  b: '2',
  c: 3,
};
const filter = onlyObject.filter(obj, [ 'a', 'c' ]);
const reduce = onlyObject.reduce(obj, [ 'a', 'c' ]);
```

filter yields:
```
{
  a: 1,
  c: 3,
}
```


reduce yields:
```
{
  b: '2',
}
```