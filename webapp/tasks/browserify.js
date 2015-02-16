'use strict';
module.exports = function(gulp) {
  var browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      buffer = require('vinyl-buffer'),
      gutil = require('gulp-util'),
      reactify = require('reactify'),
      babelify = require('babelify'),
      uglify = require('gulp-uglify'),
      livereload = require('gulp-livereload');


  gulp.task('browserify', function() {
    browserify(['./public/js/main.js'])
      .transform(babelify.configure({
        experimental: true
      }))
      .transform(reactify)
      .bundle()
      .pipe(source('main.js'))
      // .pipe(buffer())
      // .pipe(uglify())
      .on("error", function (err) { console.log("Error : " + err.message); })
      .pipe(gulp.dest('./public/dist/'))
      .pipe(livereload());
  });
};
