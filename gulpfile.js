var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
    gulp.src('specs/*.spec.js')
        .pipe(mocha());
});

gulp.task('default',['test']);