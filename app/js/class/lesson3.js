// {
//     // #构造函数#
//     let regex = new RegExp('xyz', 'i'); //第一个参数是字符串，第二个是修饰符
//     let regex2 = new RegExp(/xyz/i); //第一个参数是正则表达式，不接受第二个参数，否则会报错
//     console.log(regex.test('xyz123'), regex2.test('xyz123'));
//     console.log(regex.test('xyZ123'), regex2.test('xyZ123'));

//     let regex3 = new RegExp(/abc/ig, 'i');
//     console.log(regex3.flags); //原有正则对象的修饰符是ig，它会被第二个参数i覆盖

// }

// g y 都是全局匹配
{
	let s='bbb_bb_b';
	var a1=/b+/g; // g 修饰符 从上次匹配的位置开始寻找，任何一个匹配都算成功
	var a2=/b+/y; // y 修饰符  匹配的第一个必须是紧跟着的下一个字符匹配成功才算次数

	console.log('第一次 a1-> '+a1.exec(s), 'a2-> '+a2.exec(s)); // ["bbbb"],["bbbb"]
	console.log('第二次 a1-> '+a1.exec(s), 'a2 -> '+a2.exec(s)); // ["bbb"],null

    console.log(a1.sticky, a2.sticky); //表示是否开启了粘连模式

}