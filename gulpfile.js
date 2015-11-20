var gulp = require('gulp');
var concat = require('gulp-concat');
var Server = require('karma').Server;
var minify = require('gulp-minify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

/**
 * Run test once and exit
 */
gulp.task('karma', function (done) {
    new Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
});

gulp.task('scripts', function() {
    gulp.src([
            'app/src/**/*.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));

    gulp.src([
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'app/src/app.js',
            'app/src/**/*.js',
            '!app/src/**/*.spec.js'
        ])
        .pipe(concat('production.js'))
        .pipe(minify())
        .pipe(gulp.dest('app/dist'));
});

gulp.task('sass', function () {
    gulp.src([
            'styles/src/*.scss',
            'arr/src/**/*.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('production.css'))
        .pipe(minify())
        .pipe(gulp.dest('./styles/dist'));
});

gulp.task('test', ['karma']);

gulp.task('build', ['karma', 'sass', 'scripts']);

gulp.task('watch', function() {
   gulp.watch([
       'styles/src/*.scss',
       'arr/src/**/*.scss'
   ], ['sass']);

    gulp.watch([
        'app/src/**/*.js',
        '!app/src/**/*.spec.js'
    ], ['scripts']);
});