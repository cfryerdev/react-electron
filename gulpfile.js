
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

var sassConfig = {
	inputDirectory: './src/Content/SCSS/**/*.scss',
    outputFile: './src/Content/CSS/styles.css'
}

gulp.task('default', ['sass:watch']);

gulp.task('sass:watch', function() {
    gulp.watch(sassConfig.inputDirectory,['sass:build']);
});

gulp.task('sass:build', function() {
    return gulp.src('./src/Content/SCSS/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./src/Content/CSS'))
});