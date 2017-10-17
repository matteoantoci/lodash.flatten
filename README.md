# lodash.flatten
Flatten / un-flatten nested objects

A simple utility based on [lodash](https://lodash.com/) to flatten and un-flatten nested objects/arrays.

Useful when working with `_.get` and `_.set`

```
un-flattened | flattened
---------------------------
{ foo: { bar: false } } <=> { 'foo.bar': false }
{ a: [{ b: ['c','d'] }] } <=> { 'a[0].b[0]': 'c', 'a[0].b[1]' : 'd' }
[1,[2,[3,4],5],6] <=> { '[0]': 1, '[1].[0]': 2, '[1].[1].[0]': 3, '[1].[1].[1]': 4, '[1].[2]': 5, '[2]': 6 }
```