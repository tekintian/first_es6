/**
* @Author: Tekin
* @Date:   2018-09-24 16:13:55
* @Last Modified 2018-09-24
*/
function ftest(){

	// for(let i = 0; i < 5; i++){
	// 	console.log(i);
	// }
	const PI=3.1415926; //数值常量，声明后不可更改。
	
	const k={
		a:1
	}
	//对象常量，可以修改，因为对象常量存储的是对象的引用地址，对象的值改变，对象的引用地址不变，所以可以修改存储
	k.b=3;
	k.a=9;
	console.log(PI,k);

}

console.log(this);
ftest();