/**
 * @author rik
 */

module.exports = function (gulp) {
  gulp.task('watch', function () {
    return gulp.watch('./src/**/!(*.js|*.jsx|*.tag)', ['copy', 'less']);
  });
};
