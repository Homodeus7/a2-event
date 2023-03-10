'use strict';

const { src, dest } = require('gulp');
const gulp = require('gulp');

const srcPath = 'src/';
const distPath = 'dist/';

const path = {
  build: {
    html: distPath,
    css: distPath + 'assets/css/',
    js: distPath + 'assets/js/',
    images: distPath + 'assets/images/',
    fonts: distPath + 'assets/fonts/',
    videos: distPath + 'assets/videos/',
  },
  src: {
    html: srcPath + '*.html',
    css: srcPath + 'assets/css/*.css',
    js: srcPath + 'assets/js/*.js',
    images:
      srcPath +
      'assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
    fonts: srcPath + 'assets/fonts/**/*.{eot,woff,woff2,ttf,svg}',
    videos: srcPath + 'assets/videos/',
  },
  watch: {
    html: srcPath + '**/*.html',
    js: srcPath + 'assets/js/**/*.js',
    css: srcPath + 'assets/css/**/*.css',
    images:
      srcPath +
      'assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
    fonts: srcPath + 'assets/fonts/**/*.{eot,woff,woff2,ttf,svg}',
  },
  clean: './' + distPath,
};

const build = gulp.series(
  clean,
  gulp.parallel(html, css, js, images, webpImages, fonts)
);

exports.build = build;
