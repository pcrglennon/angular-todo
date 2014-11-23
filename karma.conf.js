module.exports = function(config) {
  config.set({
    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: '.',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js',
      'src/**/*.spec.js'
    ],

    frameworks: [ 'jasmine' ],
    plugins: [ 'karma-jasmine', 'karma-phantomjs-launcher' ],

    /**
     * How to report, by default.
     */
    reporters: 'dots',

    /**
     * Disable file watching by default.
     */
    autoWatch: false,

    browsers: [
      'PhantomJS'
    ]
  });
}
