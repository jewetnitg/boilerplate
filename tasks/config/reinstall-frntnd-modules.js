/**
 * @author rik
 */
var shell = require('gulp-shell');

module.exports = function (gulp) {
  gulp.task('reinstall-frntnd-modules', shell.task([
    'rm -rf node_modules/frntnd-* node_modules/frontend-* && npm i'
  ]));
};