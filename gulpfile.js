const { src, dest, series, watch } = require("gulp");
const concat = require("gulp-concat");
const svgSprite = require("gulp-svg-sprite");
const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

const clean = async () => {
  const { deleteAsync } = await import("del");
  return deleteAsync(["build"]);
};

const html = () => {
  return src("src/**/*.html").pipe(dest("build")).pipe(browserSync.stream());
};

const styles = () => {
  return src("src/styles/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write())
    .pipe(dest("build"))
    .pipe(browserSync.stream());
};

const svgSprites = () => {
  return src("src/images/svg/**/*.svg")
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../ivk-sprite.svg",
          },
        },
      })
    )
    .pipe(dest("build/images"));
};

const imagesMin = () => {
  return src(
    [
      "src/images/**/*.jpg",
      "src/images/**/*.jpeg",
      "src/images/**/*.png",
      "src/images/**/*.webp",
      "src/images/*.svg",
    ],
    { encoding: false }
  )
    .pipe(imagemin())
    .pipe(dest("build/images"));
};

const scripts = () => {
  return src("src/js/main.js")
    .pipe(sourcemaps.init())
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write())
    .pipe(dest("build"))
    .pipe(browserSync.stream());
};

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: "build",
    },
  });
};

watch("src/**/*.html", html);
watch("src/styles/**/*.css", styles);
watch("src/js/**/*.js", scripts);
watch("src/images/svg/**/*.svg", svgSprites);

exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.default = series(
  clean,
  html,
  styles,
  scripts,
  imagesMin,
  svgSprites,
  watchFiles
);
