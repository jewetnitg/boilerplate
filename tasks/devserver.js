var server = require('./helpers/server');

module.exports = function (gulp) {
  // a dev server that returns the index by default, the requested resource is not found
  gulp.task('devserver', function () {
    server.start();
  });
};
