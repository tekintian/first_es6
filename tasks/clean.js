/**
 * 清空指定目录文件任务脚本
* @Author: Tekin
* @Date:   2018-09-23 23:20:37
* @Last Modified 2018-09-23 @Last Modified time: 2018-09-23 23:20:37
*/
import gulp from 'gulp';
import del from 'del';
import args from './util/args';

gulp.task('clean',()=>{
	//删除指定目录
  return del(['server/public','server/views'])
})