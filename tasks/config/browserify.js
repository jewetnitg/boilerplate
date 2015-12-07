var _ = require('lodash');

var browserify = require('browserify');
var riotify = require('riotify');

var babel = require('babelify');
var stringify = require('stringify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var sourcemaps = require('gulp-sourcemaps');
var requireGlobify = require('require-globify');

var browserifyConfig = require('../../browserify.config');

var istanbul = require("browserify-babel-istanbul");

module.exports = function (gulp, plugins, growl) {
  var main = browserifyConfig.entries;

  function doBrowserify(env) {
    env = env || 'dev';
    if (typeof main !== 'string') {
      throw new Error('Browserify config entries must be a string');
    }

    browserifyConfig.entries = [
      'node_modules/babel-polyfill/lib/index',
      main.replace(/\.js$/gi, '_' + env + '.js')
    ];

    var bundler = browserify(browserifyConfig)
      .transform(istanbul)
      .transform(riotify)
      .transform(babel)
      .transform(requireGlobify);

    return bundler.bundle()
      .on('error', function (err) {
        console.error(err);
        this.emit('end');
      })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build/dst'));
  }

  var envs = ['prod', 'dev'];

  _.each(envs, function (env) {
    gulp.task('browserify:' + env, function () {
      return doBrowserify(env)
    });
  });
};