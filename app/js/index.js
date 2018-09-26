/**
* @Author: Tekin
* @Date:   2018-09-23 22:01:34
* @Last Modified 2018-09-26
*/
/*class Test{
    constructor(){
        this.a='This is ES6 compile test SS';
    }
}

let test=new Test();
document.getElementById('first_test').innerHTML=test.a
*/
//引入 .js文件 地址相对当前目录

//解构赋值
// import './class/lesson2';

//正则
// import './class/lesson3';
// .... 
// import './class/lesson14';
// 
//  import 'babel-polyfill';
// import './class/lesson15';
// 
// import {A,MyTest} from './class/lesson17';

// let tt=new MyTest()
// tt.test('中国测试','aaa','bbb');
// 

import mymod from './class/lesson17';

mymod.test();
mymod.aaa();


