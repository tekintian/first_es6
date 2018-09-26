/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _lesson = __webpack_require__(2);

	var _lesson2 = _interopRequireDefault(_lesson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_lesson2.default.test(); /**
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

	_lesson2.default.aaa();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// export let A=123;
	//
	// export function test(){
	//   console.log('test');
	// }
	//
	// export class Hello{
	//   test(){
	//     console.log('class');
	//   }
	// }

	var A = 123;
	function test() {
	  console.log('test');
	}

	var aaa = function aaa() {
	  console.log('arrow function');
	};

	var Hello = function () {
	  function Hello() {
	    _classCallCheck(this, Hello);
	  }

	  _createClass(Hello, [{
	    key: 'test',
	    value: function test() {
	      console.log('class');
	    }
	  }]);

	  return Hello;
	}();

	var MyTest = function () {
	  function MyTest() {
	    _classCallCheck(this, MyTest);
	  }

	  _createClass(MyTest, [{
	    key: 'test',
	    value: function test() {
	      for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
	        arg[_key] = arguments[_key];
	      }

	      console.log(arg);
	    }
	  }]);

	  return MyTest;
	}();

	exports.default = {
	  A: A,
	  aaa: aaa,
	  test: test,
	  Hello: Hello,
	  MyTest: MyTest
	};

/***/ })
/******/ ]);