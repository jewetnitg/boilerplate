module.exports = function (gulp, plugins, growl) {

  gulp.task('copy', function () {
    return gulp.src(['./src/assets/**/**.*'])
      .pipe(gulp.dest('build/dst'));
  });

};
