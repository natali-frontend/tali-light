'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require("browser-sync"),
    cssmin = require('gulp-minify-css'),
    reload = browserSync.reload;


gulp.task('sass', function () { // create task "sass"
    return gulp.src('./src/assets/scss/main.scss') // get a source
        .pipe(sass().on('error', sass.logError)) // convert scss to CSS with gulp-sass
        .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // vendor prefixes
        .pipe(cssmin()) // CSS code minimization
        .pipe(gulp.dest('./src/assets/css')) // upload the result to the public/css folder
        .pipe(reload({stream: true})); // reload server
});

gulp.task('html', function () {
    return gulp.src('./src/*.html')
        .pipe(browserSync.reload({stream: true}))
});


gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: "./src"
        },
        port: 8080,
        open: true,
        notify: false
    })

});

gulp.task('watch', function () {
    gulp.watch('./src/assets/scss/*.scss', gulp.parallel('sass'));
    gulp.watch('./src/*.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('sass', 'browserSync', 'watch'));
