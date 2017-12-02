let rawData = ['foo', 'bar']

// see bundle.js, here got error
export default {
  map: rawData.reduce(function(rs, vv) {
    rs[vv] = vv
    return rs
  }, {}),
}
