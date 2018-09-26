import 'babel-polyfill'; //处理 let  of  values()兼容问题

//Array.of 把数组转换为对象
{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}
//Array.from把伪数组【集合】转换为数组
{
  let p = document.querySelectorAll('p');
  let pArr = Array.from(p);
  console.log(pArr);
  pArr.forEach(function(item){
    console.log(item.textContent); //textContent 原生获取DOM节点文本属性 获取
  })
}

//遍历每个数组后返回
{
  console.log(Array.from([1,3,5],function(item){ return item *2 }));
}

// fill(7,1,3)   //["a", 7, 7]
{
  console.log('fill-7',[1,'a',undefined].fill(7));
  console.log('fill,pos',['a','b','c'].fill(7,1,3)); //["a", 7, 7]
}


{
  //返回数组下标
  for(let index of ['1','c','ks'].keys()){
    console.log('keys',index);
  }
  //取值  有兼容问题，需要引入 import 'babel-polyfill' 模块包
  for(let value of ['1','c','ks'].values()){
    console.log('values：',value);
  }
  //取索引与值
  for(let [index,value] of ['1','c','ks'].entries()){
    console.log('values',index,value);
  }
}

//copyWithin(0,3,4)  0 从哪个位置开始替换; 3 从哪个位置开始读取数据 4 到那个位置截止。
{
  console.log([1,6,16,27,28].copyWithin(0,3,4)); //[27, 6, 16, 27, 28]
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3}));
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));
}

{
  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}
