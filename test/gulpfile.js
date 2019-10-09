const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    del = require('del');


const {dest, parallel, series} = require('gulp');
const destinationBaseDir = 'dist/';


const destinationDirJS = destinationBaseDir + '/js';

var path = {
    HTML: 'src/index.html',
    ALL: ['src/components/*.js', 'src/components/**/*.js', 'src/index.html'],
    JS: ['src/components/*.js', 'src/components/**/*.js'],
    CSS: ['src/components/app/App.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/src',
    DEST_CSS: 'dist/css',
    DEST_BUILD: 'dist/build',
    DEST: 'dist'
};

gulp.task('transpileReact', function babelTranspileReact() {
    return browserify('src/index.js')
        .transform(babelify)
        .bundle()
        .pipe(source('App.js'))
        .pipe(dest(path.DEST_SRC))
});

gulp.task('buildHtml', function buildHtml() {
  return gulp.src('public/index.html')
      .pipe(gulp.dest(destinationBaseDir))
});

gulp.task('css', function () {
    return gulp.src(path.CSS)
        .pipe(dest(path.DEST_CSS))
});

gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: './dist'
        }
    })
});

const build = parallel(['transpileReact','css','buildHtml', 'server']);

function clean() {
    return del(['build/dist'], {force: true});
}

exports.build = build;
exports.clean = clean;
exports.default = series(clean, build);
