'use strict';

const gulp = require('gulp-help')(require('gulp'));
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const react = require('gulp-react');
const rename = require('gulp-rename');
const browserify = require('gulp-browserify');


//path to files for build
const paths = {
  vendor: 'src/vendor/**/*.js',
  components: 'src/content/',
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
  gulp.src(paths.browserifyEntryPoint)
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('dist'))
});


/**
 * uses babel as transpiler for es6
 */
gulp.task('compile:es6', function (){
  gulp.src(paths.background)
    .pipe(babel({
      only: [paths.background],
      compact:true
    }))
    .pipe(gulp.dest('dist'))
});

/**
 * use transpiler for jsx
 */
gulp.task('compile:jsx', function (){
  gulp.src([ paths.content ])
    .pipe(react())
    .pipe(gulp.dest('dist'))
});

/**
 *  starts watcher for development
 */
gulp.task('build:dist', ['copy:static-dist-manifest','copy:static-dist-assets','copy:static-dist-css','copy:static-dist-vendor','compile:jsx','compile:es6']);
gulp.task('start:dev', function(){
  gulp.watch([paths.browserifyEntryPoint, paths.lib], ['bundle:dependencies']);
  gulp.watch([paths.vendor], ['build:dist']);
  gulp.watch([paths.assets, paths.css, paths.manifest], ['build:dist']);
  gulp.watch([paths.content, paths.components], ['compile:jsx']);
  gulp.watch([paths.background], ['compile:es6']);
});

/**
 * default task
 */
gulp.task('default',[ 'build:dist', 'start:dev']);
