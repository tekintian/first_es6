{
  function test(x, y = 'world'){
    console.log('默认值',x,y);
  }
  test('hello');
  test('hello','kill');
}

{
  let x='test';
  function test2(x,y=x){
    console.log('作用域',x,y);
  }
  test2('kill');
}

{
  function test3(...arg){
    for(let v of arg){
      console.log('rest',v);
    }
  }
  test3(1,2,3,4,'a');
}

{
  console.log(...[1,2,4]);
  console.log('a',...[1,2,4]);
}

{
  let arrow = v => v*2;
  let arrow2 = () => 5;
  console.log('arrow',arrow(3));
  console.log(arrow2());

}
//箭头函数 没有 绑定this， 如果需要使用this则不能使用箭头函数
{
  //v为参数
  let arr = v => v*10;
  console.log(arr(2));
  let arr2 = () => {
    return console.log(this); //undefined
  };
  arr2(); //undefined
}

//伪调用  的作用 提升性能； 函数嵌套的情况建议使用伪调用形式
{
  function tail(x){
    console.log('tail',x);
  }
  function fx(x){
    return tail(x)
  }
  fx(123)
}
