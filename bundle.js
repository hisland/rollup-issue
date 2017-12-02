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
