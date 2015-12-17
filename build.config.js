/**
 * @author rik
 */

/**
 * @name build.config
 * @desc The build.config file contains config for builds
 * @property taskDir {String} The directory in which to look for gulp tasks
 * @property defaultTask {String} The default task to run when gulp is ran without arguments
 * @property tasks {Object<Object<Array>>} Object containing sequences of tasks
 * @type {Object}
 */
var buildConfig = {

  // directory in which the tasks are located, tasks may be nested under directories
  tasksDir: './tasks',

  // default task to run, eg. this task is ran when running gulp without a task
  defaultTask: "build:prod",

  tasks: {
    // run production build
    'build:prod': [
      // run tests once
      'test',

      // clean build dir
      'clean',

      // run browserify
      'browserify:prod',

      // copy static assets
      'copy',

      // compile and copy less
      'less',

      // create documentation
      'jsdoc',

      // put the build in an archive
      'tar'
    ],

    // run develop build
    'build:dev': [
      // run tests once
      'test',

      // clean build dir
      'clean',

      // run browserify
      'browserify:dev',

      // copy static assets
      'copy',

      // compile and copy less
      'less',

      // create documentation
      'jsdoc',

      // put the build in an archive
      'tar'
    ],

    'sync': [
      // run browserify
      'browserify:dev',

      // copy static assets
      'copy',

      // compile and copy less
      'less'
    ],

    // run develop build and start a dev server
    'dev': [
      // build project
      'build:dev',

      // launch the dev server
      'devserver',

      // rebuild on change
      'watch'
    ]
  }

};

module.exports = buildConfig;