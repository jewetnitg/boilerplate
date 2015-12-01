module.exports = function (gulp, plugins) {
  gulp.task('build:prod', function (cb) {
    plugins.sequence(
      // run tests once
      'test',

      // clean build dir
      'clean',

      // run browserify
      'browserify:prod',

      // copy static assets
      'copy',

      // create documentation
      'jsdoc',

      // put the build in an archive
      'tar',

      cb
    );
  });
  gulp.task('build:dev', function (cb) {
    plugins.sequence(
      // run tests once
      'test',

      // clean build dir
      'clean',

      // run browserify
      'browserify:dev',

      // copy static assets
      'copy',

      // create documentation
      'jsdoc',

      // put the build in an archive
      'tar',

      cb
    );
  });
};
