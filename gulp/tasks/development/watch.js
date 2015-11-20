var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', function() {
    gulp.watch([
        'styles/src/*.scss',
        'arr/src/**/*.scss'
    ], ['sass']);

    gulp.watch([
        'app/src/**/*.js',
        '!app/src/**/*.spec.js'
    ], ['scripts']);
});
