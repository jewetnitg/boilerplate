var _ = require('lodash');
var path = require('path');
var fs = require('fs');
var connect = require('gulp-connect');

module.exports = function (gulp) {
  var serverRoot = './build/dst';
  var indexFile = 'index.html';
  var defaultResponse = '';

  // a dev server that returns the index by default, the requested resource is not found
  gulp.task('devserver', function () {
      fs.readFile(path.join(serverRoot, indexFile), function (err, data) {
        if (err) throw err;

        defaultResponse = data;

        connect.server({
          root: serverRoot,
          port: 9000,
          middleware: function (connect, o) {
            return [function (req, res, next) {
              if (!req.url || req.url === '/') {
                res.end(defaultResponse);
              }

              fs.readFile(path.join(serverRoot, req.url), function (err, data) {
                if (err) {
                  res.end(defaultResponse);
                } else {
                  res.end(data);
                }
              });
            }];
          },
          livereload: true
        });
      });
    }
  )
  ;
}
;
