let gulp = require("gulp");
let postcss = require("gulp-postcss");
let sass = require("gulp-sass");
var cssnano = require("cssnano");

gulp.task("styles", function() {
  let processors = [cssnano];
  return gulp
    .src("./src/*.scss")
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest("./dest"));
});

gulp.task("watch:styles", function() {
  gulp.watch("**/*.scss", ["styles"]);
});
