/**
* @Author: Tekin
* @Date:   2018-09-24 18:44:20
* @Last Modified 2018-09-24
*/
{
  console.log('a',`\u0061`);
  console.log('s',`\u20BB7`); // \u20BB7 超过了 0xFFFF

  console.log('s',`\u{20BB7}`);  //把值用花括号抱起来
}

{
  let s='𠮷';
  console.log('length',s.length); // 4个字节， 每2个直接算一个长度
  // console.log('0',s.charAt(0)); //取字符
  // console.log('1',s.charAt(1));
  // console.log('at0',s.charCodeAt(0));// 取unicode码值
  // console.log('at1',s.charCodeAt(1));

  let s1='𠮷a';
  console.log('length',s1.length);
  console.log('code0',s1.codePointAt(0)); //自动取4个字节
  console.log('code0',s1.codePointAt(0).toString(16));
  console.log('code1',s1.codePointAt(1)); //只取 ‘𠮷’的后2个字节
  console.log('code2',s1.codePointAt(2));
}

{
  console.log(String.fromCharCode("0x20bb7")); //es5中处理大于 0xFFFF的字符
  console.log(String.fromCodePoint("0x20bb7")); //es6
}


//处理字符大于 0xFFFF
{
  let str='\u{20bb7}abc';
  for(let i=0;i<str.length;i++){
    console.log('es5',str[i]);
  }
  //ES6 let of遍历器
  for(let code of str){
    console.log('es6',code);
  }
}


//判断字符是否包含指定字符
{
  let str="string";
  console.log('includes',str.includes("c"));
  console.log('start',str.startsWith('str'));
  console.log('end',str.endsWith('ng'));
}

{
  let str="abc";
  console.log(str.repeat(20));
}

{
  let name="list";
  let info="hello world";
  let mobile='13888011868';
  let m=`i am ${name},${info} ${mobile}`;
  let bb=`I am ${name}, ${info} my mobile is : ${mobile}`;
  console.log(bb);
  console.log(m);
}

//补白函数
{
	console.log('1'.padStart('3','0'));
  console.log('1'.padStart(2,'0'));
  console.log('1'.padEnd(3,'1'));
}

//标签模板
{
	let user={
		name:'tekin',
		info:'hello world'
	}

	console.log(abc(`i am ${user.name}, ${user.info}`));
	function abc(s, v1, v2){
		console.log(s,v1,v2);
		 return s+v1+v2;
	}
}

// 原始输出
{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}
