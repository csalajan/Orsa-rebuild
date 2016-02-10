var gulp = require('gulp');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

gulp.task('deploy', function(done) {
    runSequence('karma',
        ['styles', 'scripts','fonts', 'views'],
        'sftp',
        function(code) {
            var message = gutil.colors.green('Deployment Complete');
            var color = gutil.colors.magenta();
            if (code !== undefined) {
                code.message = code.message.match(/'([^']+)'/)[1];
                switch(code.message) {
                    case 'karma':
                        message = gutil.colors.red('Please fix all unit tests prior to deployment');
                        break;

                }
            }
            gutil.log(message);
            done();
        }
    );
});
