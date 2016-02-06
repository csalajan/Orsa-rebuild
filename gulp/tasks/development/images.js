var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../../config').images;

gulp.task('images', function() {
    return gulp.src(config.files)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest(config.destination));
});
