<<<<<<< Updated upstream
const gulpfile = require('gulpfile');


const {src, dest, series, parallel} = require('gulp');

const des
=======
const gulp = require('gulp'),
    babel = require('gulp-babel'),
    del = require('del');


const {dest, parallel, series} = require('gulp');
const destinationBaseDir = 'build/dist';

const destinationDirJS = destinationBaseDir + '/js';

gulp.task('babelTranspileReact', function babelTranspileReact() {
    return gulp.src('src/components/**/*.js')
        .pipe(babel())
       .pipe(dest(destinationDirJS));
});

gulp.task('buildHtml', function buildHtml() {
  return gulp.src('src/public/index.html')
      .pipe(gulp.dest(destinationBaseDir + '/public'))
});

const build = parallel(['babelTranspileReact']);

function clean() {
    return del(['build/dist'], {force: true});
}

exports.build = build;
exports.clean = clean;
exports.default = series(clean, build);
>>>>>>> Stashed changes
