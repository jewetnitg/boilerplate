/**
 * @author rik
 */
var _ = require('lodash');
var PushStateAssetServer = require('pushstate-asset-server');

var devServerConfig = require('../../devserver.config');

_.defaults(devServerConfig, {
  index: 'index.html',
  root: './build/dst',
  port: 9000,
  livereload: true
});

var server = PushStateAssetServer(devServerConfig);

module.exports = server;