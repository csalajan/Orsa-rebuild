var gulp = require('gulp');
var config = require('../../config');

gulp.task('index', function() {
    return gulp.src([config.development.index, config.development.htaccess])
        .pipe(gulp.dest(config.development.root));
});

gulp.task('views', ['index'], function() {

    return gulp.src(config.views.files)
        .pipe(gulp.dest(config.views.destination));
});
