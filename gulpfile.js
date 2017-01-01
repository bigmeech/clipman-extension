'use strict';

const gulp = require('gulp-help')(require('gulp'));
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');


//path to files for build
const paths = {
  components: 'src/content/',
  content: 'src/content.jsx',
  background: 'src/background.js',
  assets: 'src/assets',
  css: 'src/css',
  manifest: 'src/manifest.json'
};

/**
 * copies static files to dist folder
 */
gulp.task('copy:static-dist', function(){
  gulp.src([paths.assets, paths.css, paths.manifest ])
    .pipe(gulp.dest('dist'))
});

//uses babel as transpiler for jsx and es6
gulp.task('compile:babel', function (){
  gulp.src([ paths.content, paths.components, paths.background ])
    .pipe(babel({
      only: [ paths.content, paths.components, paths.background ],
      compact:true
    }))
    .pipe(gulp.dest('dist'))
});

// starts watcher for development
gulp.task('build:dist', function(){
  gulp.watch(paths.background,['compile:babel']);
  gulp.watch([paths.manifest, paths.assets, paths.css], ['copy:static-dist']);
});

gulp.task('default',[ 'build:dist' ]);
