/**
 * learning-gulp - gulpfile.js
 * Created by mengdesen on 15/4/14.
 * Last modified by nieweidong on 2015/04/15
 */

'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var shrink = require('gulp-cssshrink');
var greplace = require('gulp-replace');

// 静态文件打包合并
var webpack = require('gulp-webpack');
// 上传七牛sdn
var qn = require('gulp-qn');
// MD5戳
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var runSequence = require('run-sequence');

var config = require('./config/index');

var qiniu = {
  accessKey: '3iNIp3yQIbbmDe3aoj2QyxI5BtnoLLeGDkpJydqr',
  secretKey: 'RowoAn8anDGHTqYlPQj0RnlLrO9rvFNkkdA0yNQk',
  bucket: 'static',
  domain: 'http://oma3dr5db.bkt.clouddn.com'
};

gulp.task('index', function() {
  gulp.src('./index.html')
    .pipe(greplace(/\/static/g, qiniu.domain + "/static"))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
  gulp.src('./js')
    .pipe(webpack(config))
    .pipe(gulp.dest('./build'));
});

gulp.task('css', function() {
  gulp.src(['./css/main.css', './css/view.css'])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('publish-js', function() {
  return gulp.src(['dist/**'])
    // .pipe(webpack(config))
    // .pipe(uglify())
    // .pipe(rev())
    // .pipe(gulp.dest('dist2'))
    .pipe(qn({
      qiniu: qiniu,
      prefix: '',
      projectRoot: config.build.assetsRoot
    }))
    // .pipe(rev.manifest())
    // .pipe(gulp.dest('./dist2/rev/js'));
});

gulp.task('publish-css', function() {
  return gulp.src(['dist/**'])
    .pipe(concat('app.css'))
    .pipe(shrink())
    .pipe(rev())
    .pipe(gulp.dest('./build'))
    .pipe(qn({
      qiniu: qiniu,
      // prefix: 'gmap'
    }))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./build/rev/css'));
});

gulp.task('watch', function() {
  gulp.watch('./css/*.css', ['css']);
  gulp.watch('./js/*.js', ['js']);
});

gulp.task('publish-html', function() {
  return gulp.src(['./build/rev/**/*.json', './index.html'])
    .pipe(revCollector({
      dirReplacements: {
        'build/': ''
      }
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('publish', function(callback) {
  runSequence(
    ['publish-css', 'publish-js'],
    'publish-html',
    callback);
});