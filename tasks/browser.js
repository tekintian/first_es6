/**
 * 完成监听任务
* @Author: Tekin
* @Date:   2018-09-23 23:15:07
* @Last Modified 2018-09-24
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

//创建browser监听任务
gulp.task('browser',(cb)=>{
  //如果处于非监听状态，则直接返回cb回调函数
  if(!args.watch) return cb();
  //当监听的js文件发送变化的时候启动 scripts构建脚本
  gulp.watch('app/**/*.js',['scripts']);
  //同上，调用 pages脚本处理ejs文件
  gulp.watch('app/**/*.ejs',['pages']);
  //监听css文件
  gulp.watch('app/**/*.css',['css']);
});