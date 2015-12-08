/**
 * Gets executed just before the application starts, must return a resolving Promise in order for the {@link Application} to start.
 *
 * @namespace config/bootstrap
 *
 * @type Function
 *
 * @returns {Promise}
 */
function bootstrap() {
  return Promise.resolve();
}

export default bootstrap;