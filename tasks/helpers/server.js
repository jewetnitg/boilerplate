/**
 * @author rik
 */
var PushStateAssetServer = require('pushstate-asset-server');

var server = PushStateAssetServer({
  index: 'index.html',
  root: './build/dst',
  port: 9000,
  livereload: true
});

module.exports = server;