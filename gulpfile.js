const { src, dest } = require('gulp');

function css() {
  return src('src/scss/**/*.{scss,sass}').pipe(dest('dist/css'));
}
