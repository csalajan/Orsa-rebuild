var gulp = require('gulp');
var config = require('../../config');

gulp.task('views', function() {
    gulp.src(config.views.files)
        .pipe(gulp.dest(config.views.destination));

    gulp.src(config.development.index)
        .pipe(gulp.dest(config.development.root));
});
