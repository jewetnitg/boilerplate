var path = require('path');
var server = require('./helpers/server');

var _ = require('lodash');

var browserify = require('browserify');
var watchify = require('watchify');
var riotify = require('riotify');

var babel = require('babelify');
var stringify = require('stringify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var sourcemaps = require('gulp-sourcemaps');
var requireGlobify = require('require-globify');

var packageJson = require('../package.json');
var browserifyConfig = packageJson.browserify;

var istanbul = require("browserify-babel-istanbul");

module.exports = function (gulp, plugins, growl) {
  var main = browserifyConfig.entries;

  function doBrowserify(env) {
    env = env || 'dev';
    if (typeof main !== 'string') {
      throw new Error('Browserify config entries must be a string');
    }

    _.extend(browserifyConfig, {
      entries: [
        'node_modules/babel-polyfill/lib/index',
        main.replace(/\.js$/gi, '_' + env + '.js')
      ],
      cache: {},
      packageCache: {}
    });

    var b = browserify(browserifyConfig)
      .transform(babel.configure({
        ignore: ["node_modules"]
      }))
      .transform(riotify)
      .transform(requireGlobify)
      .plugin('minifyify', {
        map: 'main.js.map',
        base: 'src',
        output: './build/dst/main.js.map'
      })
      .plugin(watchify);

    function bundle(reload) {
      console.log('started browserify');

      var stream = b.bundle()
        .on('error', function (err) {
          console.error(err);
          this.emit('end');
        })
        .on('end', function (err) {
          console.log('finished browserify');
        })
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./build/dst'));

      if (reload) {
        stream.pipe(server.reload());
      }

      return stream;
    }

    b.on('update', function () {
      bundle(true);
    });

    return bundle();
  }

  var envs = ['prod', 'dev'];

  _.each(envs, function (env) {
    gulp.task('browserify:' + env, function () {
      return doBrowserify(env)
    });
  });
};