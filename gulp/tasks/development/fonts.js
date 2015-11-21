var gulp = require('gulp');
var config = require('../../config');

gulp.task('fonts', function() {
    return gulp.src(config.fonts.files)
        .pipe(gulp.dest(config.fonts.destination));
});
