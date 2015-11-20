var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var config = require('../../config');

gulp.task('styles', function () {
    gulp.src(config.styles.files)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('production.css'))
        .pipe(minify())
        .pipe(gulp.dest(config.styles.destination));

    gulp.src(config.styles.dependencies)
        .pipe(gulp.dest(config.styles.destination));
});