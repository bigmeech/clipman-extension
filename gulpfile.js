'use strict';

const gulp = require('gulp-help')(require('gulp'));
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const react = require('gulp-react');
const rename = require('gulp-rename');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');


//path to files for build
const paths = {
  vendor: 'src/vendor/**/*.js',
  components: 'src/content/**/*.jsx',
  content: 'src/content.jsx',
  background: 'src/background.js',
  assets: 'src/assets/**/*.*',
  css: 'src/css/**/*.*',
  manifest: 'src/manifest.json',
  lib: 'src/lib',
  browserifyEntryPoint: 'src/index.js'
};

/**
 * copies static css to dist folder
 */
gulp.task('copy:static-dist-css', function(){
  gulp.src(paths.css)
    .pipe(gulp.dest('dist/css'))
});

/**
 * copies static assets to dist folder
 */
gulp.task('copy:static-dist-assets', function(){
  gulp.src(paths.assets)
    .pipe(gulp.dest('dist/assets'))
});

/**
 * copies vendor to dist folder
 */
gulp.task('copy:static-dist-vendor', function(){
  gulp.src(paths.vendor)
    .pipe(gulp.dest('dist/vendor'))
});

/**
 * copies static manifest to dist folder
 */
gulp.task('copy:static-dist-manifest', function(){
  gulp.src(paths.manifest)
    .pipe(gulp.dest('dist'))
});


/**
 * create bundle for dependencies
 */
gulp.task('bundle:dependencies', function(){
  return browserify({entries: paths.browserifyEntryPoint, extensions: ['.js'], debug: true})
    .transform("babelify", {presets: ["es2015", "stage-0"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
});


/**
 * uses babel as transpiler for es6
 */
gulp.task('compile:es6', function (){


  return browserify({entries: paths.background, extensions: ['.js'], debug: true})
    .transform("babelify", {presets: ["es2015", "stage-0"]})
    .bundle()
    .pipe(source('background.js'))
    .pipe(gulp.dest('dist'));

  /*gulp.src(paths.background)
    .pipe(babel({
      only: [paths.background],
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))*/
});

/**
 * use transpiler for jsx
 */
gulp.task('compile:jsx', function (){
  return browserify({entries: paths.content, extensions: ['.jsx'], debug: true})
    .transform("babelify", {presets: ["es2015", "stage-0", "react"]})
    .bundle()
    .pipe(source('content.js'))
    .pipe(gulp.dest('dist'))
});

/**
 *  starts watcher for development
 */
gulp.task('build:dist', ['copy:static-dist-manifest','copy:static-dist-assets','copy:static-dist-css','copy:static-dist-vendor','compile:jsx','compile:es6']);
gulp.task('start:dev', function(){
  gulp.watch([paths.browserifyEntryPoint, paths.lib], ['bundle:dependencies']);
  gulp.watch([paths.vendor], ['build:dist']);
  gulp.watch([paths.assets, paths.css, paths.manifest, paths.css], ['build:dist']);
  gulp.watch([paths.content, paths.components], ['compile:jsx']);
  gulp.watch([paths.background], ['compile:es6']);
});

/**
 * default task
 */
gulp.task('default',[ 'build:dist', 'start:dev']);
