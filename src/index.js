var loaderUtils = require('loader-utils');

var path = require('path');

module.exports = function (source) {
  this.cacheable();

  var config = loaderUtils.getOptions(this);

  var compass = '@import "' + path.relative(path.dirname(this.resourcePath), config.mixinPath) + '";';

  return `${compass}\n${source}`;
};
