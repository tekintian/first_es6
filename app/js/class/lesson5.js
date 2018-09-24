// 二进制数值表示方法以 0b开头
{
  console.log('B',0B111110111); //二进制表示方法 0b开始 b大小写都可以
  console.log(0o767); //八进制表示方法  0o 开始
}


{
  console.log('15',Number.isFinite(15));
  console.log('NaN',Number.isFinite(NaN));
  console.log('1/0',Number.isFinite('true'/0));
  console.log('NaN',Number.isNaN(NaN));
  console.log('0',Number.isNaN(0));
}

//判断是否是整数
{
  console.log('25',Number.isInteger(25));
  console.log('25.0',Number.isInteger(25.0));
  console.log('25.1',Number.isInteger(25.1));
  console.log('25.1',Number.isInteger('25'));
  console.log('98',Number.isInteger('98'));
  console.log('98',Number.isInteger(98));
}


{
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
  console.log('10',Number.isSafeInteger(10));
  console.log('a',Number.isSafeInteger('a'));
}

{
  console.log(4.1,Math.trunc(4.1));
  console.log(4.9,Math.trunc(4.9));
}

// 判断一个数是正数 1； 负数 -1 ； 还是 0  ； 非数字  NaN
{
	console.log('99 sign:',Math.sign(99));

  console.log('-5',Math.sign(-5));
  console.log('0',Math.sign(0));
  console.log('5',Math.sign(5));
  console.log('50',Math.sign('50'));
  console.log('foo',Math.sign('foo'));
}

//平方根
{
  console.log('-1',Math.cbrt(-1));
  console.log('8',Math.cbrt(8));
  console.log('868的平方根是：',Math.cbrt(868));
}