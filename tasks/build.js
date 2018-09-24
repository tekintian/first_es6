/**
 * 构建，主要处理构建工具的顺序
* @Author: Tekin
* @Date:   2018-09-23 23:24:34
* @Last Modified 2018-09-24
*/

import gulp from 'gulp';

//处理包的顺序模块
import gulpSequence from 'gulp-sequence';

//注册任务，[] 数组说明 数组里面的任务一定是在前面的任务后面执行， server一定要在最后执行
gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','server']));
