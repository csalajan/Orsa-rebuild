var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var config = require('../../config').styles;

gulp.task('dependencies', function() {
    return gulp.src(config.dependencies)
        .pipe(gulp.dest(config.destination));
});

gulp.task('styles', ['dependencies'], function () {
    return gulp.src(config.files)
        .pipe(sass({errLogToConsole: true}))
        .pipe(concat('production.css'))
        .pipe(gulp.dest(config.destination));
});