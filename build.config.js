/**
 * @author rik
 */

/**
 * @name build.config
 * @todo TBD: refactor to JSON?
 * @desc The build.config file contains config for builds
 * @property taskDir {String} The directory in which to look for gulp tasks
 * @property defaultTask {String} The default task to run when gulp is ran without arguments
 * @property tasks {Object<Object<Array>>} Object containing sequences of tasks
 * @type {Object}
 */
var buildConfig = {

  // directory in which the tasks are located, tasks may be placed in subdirectories, please note that files will only be treated as tasks if they export a function
  tasksDir: './tasks',

  // default task to run, this task is ran when running gulp without arguments
  defaultTask: "build:prod",

  // definition of task sequences
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

      // run browserify, watches for changes also
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

    // run develop build and start a dev server
    'dev': [
      // build project, watches for js file changes also
      'build:dev',

      // launch the dev server
      'devserver',

      // watch for non js|jsx|tag file changes
      'watch'
    ]
  }

};

module.exports = buildConfig;