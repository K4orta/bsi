"use strict";

module.exports = function(gulp) {
  var livereload = require('gulp-livereload');

  livereload.listen();
  gulp.task('watch', function() {
    gulp.isWatching = true;

    gulp.watch('**/*.html').on('change', livereload.changed);

    gulp.watch('public/less/**/*.less', [
      'less'
    ]);

    gulp.watch([
      'public/js/**/*.js',
      '!public/js/dist/**/*.js'
    ], [
      'browserify'
    ]);

  });
};
