var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var sourcemaps = require('gulp-sourcemaps');

var opts = {
  entries: ['./src/app.js'],
  debug: true
}

var b = watchify(browserify(opts));
/*b.transform('babelify', {
  presets: ['es2015', 'react']
});*/

b.on('update', build);

function build() {
  b.bundle()
    .on('error', function() {
      console.log(arguments);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
}

gulp.task('build', build);

gulp.task('default', ['build']);