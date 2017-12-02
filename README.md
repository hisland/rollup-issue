## rollup.config.es.js
```
export default [
  {
    input: './entry.js',
    output: {
      file: './bundle.js',
      format: 'cjs',
    },
  },
]
```

## entry.js
```
import BB from './bb.js'

export default {
  BB: 'not use BB',
}

```

## bb.js
```
let rawData = ['foo', 'bar']

// see bundle.js, here got error
export default {
  map: rawData.reduce(function(rs, vv) {
    rs[vv] = vv
    return rs
  }, {}),
}

```

## bundle.js
```
'use strict';

let rawData = ['foo', 'bar'];

// see bundle.js, here got error
{
  map: rawData.reduce(function(rs, vv) {
    rs[vv] = vv;
    return rs
  }, {}),
}

var entry = {
  BB: 'not use BB',
};

module.exports = entry;

```


**bundle.js** got error

