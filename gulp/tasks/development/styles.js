var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var config = require('../../config').styles;

gulp.task('dependencies', function() {
    return gulp.src(config.dependencies)
        .pipe(gulp.dest(config.destination));
});

gulp.task('styles', ['dependencies'], function () {
    return gulp.src(config.files)
        .pipe(concat('production.css'))
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest(config.destination));
});

gulp.task('styles:watch', function() {
   gulp.watch(config.files, ['styles']);
});