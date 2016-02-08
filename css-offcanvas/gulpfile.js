var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

gulp.task('less', function () {
  return gulp.src('./app/less/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', function(){
  gulp.watch('./app/less/**/*.less', ['less']);
});
