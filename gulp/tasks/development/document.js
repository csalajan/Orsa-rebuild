var gulp = require('gulp');
var concat = require('gulp-concat');
var markdox = require('gulp-markdox');
var config = require('../../config').development;

gulp.task('document', function() {
    gulp.src(config.documentation.files)
        .pipe(markdox())
        .pipe(concat('docs.md'))
        .pipe(gulp.dest(config.documentation.destination));
});