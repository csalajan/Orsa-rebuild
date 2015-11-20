var gulp = require('gulp');
var Server = require('karma').Server;
var config = require('../../config');

gulp.task('karma', function (done) {
    new Server({
        configFile: config.karma.configFile,
        singleRun: true
    }, done).start();
});