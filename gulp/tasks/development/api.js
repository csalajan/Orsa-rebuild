var gulp = require('gulp');
var config = require('../../config').api;
var watch = require('gulp-watch');

gulp.task('api', function() {
    return gulp.src(config.files)
        .pipe(gulp.dest(config.destination));
});

gulp.task ('api:watch', function() {
    gulp.watch(config.files, ['api']);
});
