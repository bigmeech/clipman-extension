'use strict';

const jsx = require('gulp-jsx');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const gulp = require('gulp-help')(require('gulp'));

gulp.task('create:dist', function(){
  gulp.src('./src/**/*.jsx')
});

//bundle background js
gulp.task('bundle:background', function(){
  gulp.src('./src/**/*.jsx')
});

//bundle content script
gulp.task('bundle:content', function(){
  gulp.src('./src/**/*.jsx')
});

gulp.task('default',[ 'create:dist', 'bundle:background', 'bundle:content' ]);
