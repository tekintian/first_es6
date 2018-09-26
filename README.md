#  ES6 构建工具，ES6 gulp, webpack, babel 学习笔记



本项目为学习ES6 的练手项目，需要安装的环境依赖为：

nodejs  8.12.0    下载地址:  https://nodejs.org/en/ 

## 项目目录结构

~~~shell

├─app  开发的项目文件存放目录
│  ├─css   项目样式文件夹
│  ├─js  项目JS文件夹
│  │  └─class  类
│  ├─views 项目模板视图文件夹
│  └─node_modules 【npm install 自动创建的模块依赖目录】
├─server  ES6服务端文件夹
│  ├─bin ES6服务端启动脚本
│  ├─public 项目发布目录
│  │  └─js
│  ├─routes  路由
│  ├─views  视图【app/view目录里面的视图文件编译后会自动拷贝到这里】
│  └─node_modules 【npm install 自动创建的模块依赖目录】
└─tasks
    └─util
~~~

## 使用方法

国内用户推荐安装 [cnpm 国内镜像](http://npm.taobao.org/)服务，npm包大部分存储国外，如果不用国内镜像的话可能会很慢。

~~~shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
~~~

ES6构建工具使用步骤

~~~git
git clone git@github.com:tekintian/first_es6.git
cd first_es6
cnpm install
cd server
cnpm install
cd ../
gulp --watch
~~~

浏览器打开  http://localhost:3000

使用编辑器打开  JS文件： app/js/index.js     视图文件   app/views/index.ejs   编辑保存后浏览器内容将自动更新，到此ES6项目构建工具成功搭建，开始你的ES6之旅吧 ：）



Tips: 注意依赖模块的版本，一定要与package.json中的一致，否则可能无法正常运行，依赖的包有点多，很多包更新频繁，改动较大，所以如果版本不一致的话就无法运行了...........   自动构建工具的通病，这个问题初学者一定要注意这点。



本构建工具所依赖的模块和版本如下

项目根目录 package.json

~~~shell
{
  "name": "first_es6",
  "version": "1.0.0",
  "description": "my first es6",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "TekinTian",
  "license": "ISC",
   "devDependencies": {
    "babel-core": "^6.24.0",
    "babel-loader": "^6.4.1",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "babel-polyfill": "^6.23.0",
    "babel-preset-env": "^1.2.2",
    "babel-preset-es2015": "^6.24.0",
    "connect-livereload": "^0.6.0",
    "del": "^2.2.2",
    "gulp": "^3.9.1",
    "gulp-concat": "^2.6.1",
    "gulp-if": "^2.0.2",
    "gulp-live-server": "0.0.30",
    "gulp-livereload": "^3.8.1",
    "gulp-plumber": "^1.1.0",
    "gulp-rename": "^1.2.2",
    "gulp-sequence": "^0.4.6",
    "gulp-uglify": "^2.1.0",
    "gulp-util": "^3.0.8",
    "jquery": "^3.2.1",
    "require-dir": "^0.3.1",
    "vinyl-named": "^1.1.0",
    "webpack": "^2.2.1",
    "webpack-stream": "^3.2.0",
    "yargs": "^7.0.2"
  }
}

~~~



server/package.json

~~~shell
{
  "name": "server",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "ejs": "~2.5.7",
    "express": "~4.16.0",
    "http-errors": "~1.6.2",
    "morgan": "~1.9.0",
    "serve-favicon": "~2.3.0"
  },
  "devDependencies": {
    "mockjs": "^1.0.1-beta3",
    "connect-livereload": "^0.6.0"
  }
}
~~~

## tips
babel-polyfill 处理ES6字符兼容的库

app/js/index.js  此文件为gulp构建脚本的JS入口文件，所有的ES6文件都要经过此文件后才能被构建工具识别。另外本工具需要在需要有JS渲染的视图模板文件【app/views/*.ejs】里面载入本文件链接 如：

~~~html
<!-- 引入入口js文件 -->
 <script src="/js/index.js" charset="utf-8"></script>
 
~~~

在app/js/index.js 文件里面引入其他js文件使用 import命令，如：引入 /class/lesson1.js 文件

~~~js
import './class/lesson6';
~~~

~~~babelrc
{
  "presets":["es2015"],
  "plugins":["transform-decorators-legacy"]
}
~~~

"plugins":["transform-decorators-legacy"] 这个是使用修饰符@ 所使用的插件







