var _ = require('lodash');
var path = require('path');
var PushStateAssetServer = require('pushstate-asset-server');

module.exports = function (gulp) {
  var serverRoot = './build/dst';
  var indexFile = 'index.html';

  // a dev server that returns the index by default, the requested resource is not found
  gulp.task('devserver', function () {
    var server = PushStateAssetServer({
      root: serverRoot,
      port: 9000,
      index: indexFile,
      livereload: true
    });

    server.start();
  });
};
