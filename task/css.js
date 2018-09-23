/*
* @Author: Tekin
* @Date:   2018-09-23 23:04:03
* @Last Modified 2018-09-23
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{
  return gulp.src('app/**/*.css')
    .pipe(gulp.dest('server/public'))

})
