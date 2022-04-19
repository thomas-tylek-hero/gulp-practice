const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
  return src('src/scss/**/*.{scss,sass}')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'));
}

exports.css = css;
