//数组结构赋值   使用{}块作用域，避免变量重复定义 let定义的变量只在当前块内有效
{
  let a,b,rest;
  [a,b]=[1,2];
  console.log(a,b);
}

{
  let a,b,rest;
  [a,b,...rest]=[1,2,3,4,5,6];
  console.log(a,b,rest);
}

//对象结构赋值
{
  let a,b;
  ({a,b}={a:1,b:2})
  console.log(a,b);
}

{
  let a,b,c,rest;
  [a,b,c=3]=[1,2];
  console.log(a,b,c);
}

{
  let a=1;
  let b=2;
  [a,b]=[b,a];
  console.log(a,b);
}

{
  function f(){
    return [1,2]
  }
  let a,b;
  [a,b]=f();
  console.log(a,b);
}

{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,,b]=f();
  console.log('[a,,,b]=f():');
  console.log(a,b);
}
//解构赋值
{
  function f(){
    return [1,2,3,4,5]
  }
  let a,b,c;
  [a,,...b]=f();
  console.log(a,b);
}

{
  let o={p:42,q:true};
  let {p,q}=o;
  console.log('{p,q}=o:');
  console.log(p,q);
}

{
  let {a=10,b=5}={a:3};
  console.log(a,b);
}

{
  let metaData={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]}=metaData;
  console.log(esTitle,cnTitle);
}
