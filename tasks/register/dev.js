module.exports = function (gulp, plugins) {
  gulp.task('dev', function (cb) {
    plugins.sequence(
      // temporary, until the npm modules this module depends on are stable
      'reinstall-frntnd-modules',

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
