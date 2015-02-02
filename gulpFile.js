var gulp = require('gulp'),
    vows =  require('gulp-vows');

gulp.task('test', function() {
  return gulp.src('server/node_modules/logic/**/*.spec.js')
    .pipe(vows({reporter: 'spec'}));
});

gulp.task('default', ['test']);