var less = require('gulp-less');

module.exports = function (gulp, plugins, growl) {

  gulp.task('less', function () {
    return gulp.src('./src/assets/style/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('./build/dst/style'));
  });

};