import _ from 'lodash';
import jquery from 'jquery';
import frontend from 'frntnd-framework';

// frntnd framework implementation modules, models, views, services etc.
const files = require('./**/!(main|main_dev|main_prod).js', {
  mode: 'hash'
});

// object to put options for the frntnd framework on
const frontendOptions = {};

// go through all files, the directory structure has the same hierarchy as the options the frntnd framework expects
// therefore we can set the values of the files on the frontendOptions using their path
// path passed into this iterator function looks something like 'api/models/user', which will be set to frontendOptions.api.models.user
_.each(files, (file, path) => {
  // replace slashes with dots, so the filesystem path can be used to set the value on the frontendOptions using _.set
  let objPath = path.replace(/\/|\\/g, '.');

  // set the value of the file (its default export) on the frontendOptions
  _.set(frontendOptions, objPath, file);
});

// set globals
window.$ = jquery;
window._ = _;

/**
 * Constructs the framework and runs it with an environment
 *
 * @param [env="dev"] {String} Environment for the build, applies environment specific implementation
 */
function main(env = 'dev') {
  frontendOptions.env = env;
  // call the framework with the options generated from the files and the environment set
  return frontend(frontendOptions);
}

export default main;