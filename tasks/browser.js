/**
 * 完成监听任务
* @Author: Tekin
* @Date:   2018-09-23 23:15:07
* @Last Modified 2018-09-23
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

//创建任务
gulp.task('browser',(cb)=>{
  if(!args.watch) return cb();
  //当监听的js文件发送变化的时候启动 scripts构建脚本
  gulp.watch('app/**/*.js',['scripts']);
//同上，调用 pages脚本处理ejs文件
  gulp.watch('app/**/*.ejs',['pages']);

  gulp.watch('app/**/*.css',['css']);
});