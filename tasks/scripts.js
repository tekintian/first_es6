/**
 * scripts构建脚本
 * cnpm install yargs gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify gulp-util --save-dev
* @Author: Tekin
* @Date:   2018-09-23 22:48:11
* @Last Modified 2018-09-23
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){
      }
    }))
    .pipe(named())
    //打包 错误处理
    .pipe(gulpWebpack({
      module:{
        rules:[{
          test:/\.js$/,
          loader:'babel-loader'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    //文件存放位置
    .pipe(gulp.dest('server/public/js'))

//复制 重命名
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))

//编译压缩过程
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))

//文件存储位置
    .pipe(gulp.dest('server/public/js'))

//监听文件 livereload 热更新
    .pipe(gulpif(args.watch,livereload()))
})
