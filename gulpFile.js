let gulp = require("gulp"),
  pug = require("gulp-pug"),
  watch = require("gulp-watch"),
  concat = require("gulp-concat"),
  cleanCSS = require("gulp-clean-css"),
  { parallel } = require("gulp"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify");

function pugFunc() {
  return gulp
    .src("templates/*.pug")
    .pipe(
      pug({
        filename: ["index.html", "signIn.html"],
        pretty: false
      })
    )
    .pipe(livereload())
    .pipe(gulp.dest("./"));
}

function pugIncludes() {
  return gulp.src("includes/*.pug").pipe(livereload());
}

function cssFunc() {
  return gulp
    .src("src/css/*.css")
    .pipe(sourcemaps.init())
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write())
    .pipe(livereload())
    .pipe(gulp.dest("css"));
}

function tailwindFunc() {
  return gulp
    .src("src/win/*.css")
    .pipe(concat("tailwind.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("css"));
}

function javascriptFunc() {
  gulp
    .src("./src/js/*js")
    .pipe(uglify())
    .pipe(livereload())
    .pipe(gulp.dest("js"));
}

function formValidation() {
  gulp
    .src("./src/validation/*js")
    .pipe(uglify())
    .pipe(livereload())
    .pipe(gulp.dest("validation"));
}

exports.default = function () {
  require("./gulp-server.js");
  livereload.listen();
  watch(
    ["templates/*.pug", "includes/*.pug"],
    parallel(pugFunc, tailwindFunc, pugIncludes)
  );
  watch(["src/css/*.css"], cssFunc);
  watch(["src/js/*js"], javascriptFunc);
  watch(["src/validation/*js"], formValidation);
};
