/**
 * @author rik
 */
import _ from 'lodash';

// load all framework implementation modules; config, models, views, services etc.
const files = require('../**/!(main|main_dev|main_prod).js', {
  mode: 'hash'
});

// object to put options for the framework implementation on
const implementation = {};

// go through all files, the directory structure has the same hierarchy as the options the frntnd framework expects
// therefore we can set the values of the files on the implementation using their path
// path passed into this iterator function looks something like 'api/models/user', which will be set to implementation.api.models.user
_.each(files, (file, path) => {
  // replace slashes with dots, so the filesystem path can be used to set the value on the implementation using _.set
  let objPath = path.replace(/\/|\\/g, '.');

  // set the value of the file (its default export) on the implementation
  _.set(implementation, objPath, file);
});

export default implementation;