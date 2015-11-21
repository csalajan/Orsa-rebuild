var gulp = require('gulp');
var sftp = require('gulp-sftp');
var config = require('../../config').sftp;

gulp.task('sftp', function() {
    return gulp.src(config.src)
        .pipe(sftp(config.options));
});
