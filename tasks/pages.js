/**
 * cnpm install gulp-livereload --save-dev
* @Author: Tekin
* @Date:   2018-09-23 23:01:47
* @Last Modified 2018-09-23
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{
  return gulp.src('app/**/*.ejs') //打开文件
    .pipe(gulp.dest('server')) //存储文件
    .pipe(gulpif(args.watch,livereload())) //监听文件
})