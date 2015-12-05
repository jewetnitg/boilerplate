/**
 * @author rik
 */
import 'babel-polyfill';

import _ from 'lodash';
import jquery from 'jquery';
import riot from 'riot';

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

frontendOptions.libraries = {
  riot,
  jquery
};

// call the framework with the options generated from the files
export default frontendOptions;