module.exports = function (gulp, plugins) {
  gulp.task('dev', function (cb) {
    plugins.sequence(
      // build project
      'build:dev',

      // launch the dev server
      'devserver',

      // rebuild on change
      'watch',

      cb
    );
  });
};
