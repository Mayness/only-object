# only-object

filter object tool

# Usage

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