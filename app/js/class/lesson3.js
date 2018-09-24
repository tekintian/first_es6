{
    // #构造函数#
    let regex = new RegExp('xyz', 'i'); //第一个参数是字符串，第二个是修饰符
    let regex2 = new RegExp(/xyz/i); //第一个参数是正则表达式，不接受第二个参数，否则会报错
    console.log(regex.test('xyz123'), regex2.test('xyz123'));
    console.log(regex.test('xyZ123'), regex2.test('xyZ123'));

    let regex3 = new RegExp(/abc/ig, 'i');
    console.log(regex3.flags); //原有正则对象的修饰符是ig，它会被第二个参数i覆盖

}