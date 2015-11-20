var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require('../../config');

gulp.task('scripts', function() {
    gulp.src(config.scripts.jshint.files)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));

    gulp.src(config.scripts.files)
        .pipe(concat('production.js'))
        .pipe(minify())
        .pipe(gulp.dest(config.scripts.destination));
});
