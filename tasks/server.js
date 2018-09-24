/**
 * 服务脚本
* @Author: Tekin
* @Date:   2018-09-23 23:06:40
* @Last Modified 2018-09-24
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

//cb 回调函数名称，可自定义
gulp.task('serve',(cb)=>{
	//判断是否处于监听状态，非监听转态直接返回回调函数
  if(!args.watch) return cb();

// --harmony 表示在当前命令行下执行后面的server/bin/www脚本 [express工具自动创建的]
  var server = liveserver.new(['--harmony','server/bin/www']);
  
  //启动服务器
  server.start();

//热监听 gulp.watch 做文件监听 数组表示监听的文件路径
  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);
  })

//监听需要重启服务的文件 路由和app.js启动入口文件      //重启服务器
  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });
})