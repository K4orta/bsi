"use strict";

module.exports = function(gulp) {
  var livereload = require("gulp-livereload"),
      nodemon = require("gulp-nodemon");

  livereload.listen();
  gulp.task("watch", function() {
    gulp.isWatching = true;

    gulp.watch("public/less/**/*.less", [
      "less"
    ]);

    gulp.watch([
      "public/js/**/*.js",
      "!public/js/dist/**/*.js"
    ], [
      "browserify"
    ]);

  });
};
