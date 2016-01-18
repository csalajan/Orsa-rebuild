var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var replace = require('gulp-replace');
var watch = require('gulp-watch');
var config = require('../../config').scripts;

gulp.task('lint', function() {
    return gulp.src(config.jshint.files)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('scripts', ['lint'], function() {
    return gulp.src(config.files)
        .pipe(replace('"VIEW_PATH": "src/app"', '"VIEW_PATH": "views"'))
        .pipe(concat('production.js'))
        .pipe(minify())
        .pipe(gulp.dest(config.destination));
});

gulp.task('scripts:watch', function() {
    gulp.watch(config.files, ['scripts']);
});