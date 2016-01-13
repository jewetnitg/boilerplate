import _ from 'lodash';
import jquery from 'jquery';
import app from './state';

// the js directory transformed to an object, the implementation of the framework
import implementation from './constants/implementation';

// set globals
window.$ = jquery;
window._ = _;

/**
 * Starts the application and sets the environment on the implementation.
 *
 * @param [env="dev"] {String} The build-time environment, applies environment specific implementation
 */
function main(env = 'dev') {
  implementation.env = env;
  // call the framework with the options generated from the files and the environment set
  return app.start(implementation);
}

export default main;