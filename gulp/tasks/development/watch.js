var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch', ['api:watch', 'scripts:watch', 'styles:watch', 'views:watch']);
