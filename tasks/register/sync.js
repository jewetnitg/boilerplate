module.exports = function (gulp, plugins) {
  gulp.task('sync', function (cb) {
    plugins.sequence(
      // clean build dir
      'clean',

      // run browserify
      'browserify:dev',

      // copy static assets
      'copy',

      cb
    );
  });
};
