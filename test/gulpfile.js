const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    del = require('del');

const {dest, parallel, series} = require('gulp');

const path = {
    HTML: 'src/index.html',
    ALL: ['src/**/**', 'public/**'],
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
        .transform(babelify, {
            global: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            ignore: ['node_modules/']
        })
        .bundle()
        .pipe(source('App.js'))
        .pipe(dest(path.DEST_SRC))
});

gulp.task('buildHtml', function buildHtml() {
  return gulp.src('public/index.html')
      .pipe(gulp.dest(path.DEST))
});

gulp.task('css', function () {
    return gulp.src(path.CSS)
        .pipe(dest(path.DEST_CSS))
});

gulp.task('server', function server() {
    browserSync({
        server: {
            baseDir: './dist',
        },
        watch: true,
    })
});

gulp.task('watch', function watch() {
   return gulp.watch('src/components/**/**', gulp.series(['transpileReact', browserSync.reload]))
});


const build = parallel(['transpileReact','css','buildHtml', 'watch', 'server']);

function clean() {
    return del(['dist/'], {force: true});
}

exports.build = build;
exports.clean = clean;
exports.default = series(clean, build);
