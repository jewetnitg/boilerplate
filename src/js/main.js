import _ from 'lodash';
import jquery from 'jquery';
import framework from 'frntnd-framework';
import implementation from './constants/implementation';

// set globals
window.$ = jquery;
window._ = _;

/**
 * Constructs the framework and runs it with an environment
 *
 * @param [env="dev"] {String} Environment for the build, applies environment specific implementation
 */
function main(env = 'dev') {
  implementation.env = env;
  // call the framework with the options generated from the files and the environment set
  return framework(implementation);
}

export default main;