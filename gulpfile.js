var gulp = require('gulp');

// Testing
var karma = require('karma').server;

/**
 * Testing
 */

gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('default', ['test']);