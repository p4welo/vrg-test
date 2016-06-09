var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

gulp.task('server', function () {
    connect.server({
        livereload: true
    })
});

gulp.task('sass', function () {
    gulp.src('assets/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('assets/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'server', 'watch']);