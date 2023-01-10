"use strict";

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const cleancss = require("gulp-clean-css");

function buildStyles() {
  return src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(purgecss({ content: ["./**/*.html"] }))
    .pipe(cleancss())
    .pipe(dest("./"));
}

function watchTask() {
  watch(["./sass/**/*.scss", "./**/*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
