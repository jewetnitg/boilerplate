module.exports = function (gulp, plugins) {
  gulp.task('prod', function (cb) {
    plugins.sequence(
      // build the project
      'build:prod',

      // publish documentation on github pages, this only works if you have your git public key on github
      'gh-pages',

      cb
    );
  });
};
