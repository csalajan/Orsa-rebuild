var gulp = require('gulp');
var config = require('../../config');
var watch = require('gulp-watch');

gulp.task('index', function() {
    return gulp.src([config.development.index, config.development.htaccess])
        .pipe(gulp.dest(config.development.root));
});

gulp.task('views', ['index'], function() {

    return gulp.src(config.views.files)
        .pipe(gulp.dest(config.views.destination));
});

gulp.task('views:watch', function() {
    gulp.watch(config.views.files, ['views']);
});