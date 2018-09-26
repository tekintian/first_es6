// {
//   let arr=['hello','world'];
//   let map=arr[Symbol.iterator]();
//   console.log(map.next());
//   console.log(map.next());
//   console.log(map.next());
// }

{
  let arr=['aa','bb','ccc'];
  let map=arr[Symbol.iterator]();
  console.log(map.next()); //Object {value: "aa", done: false}  value 数据的值； done数据是否执行完成
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}

{
  let obj={
    start:[1,3,5,9,90,456],
    middle:[8888,9999],
    end:[7,6,9],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      // 合并2个数组
      // let arr=self.start.concat(self.end);
      // 合并多个数组
      let arr=self.start.concat(self.end,self.middle)
      let len=arr.length;
      return {
        next(){
          if(index<len){
            return  {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }

  for(let uu of obj){
    console.log(uu);
  }

}

{
  let obj={
    start:[1,3,2],
    end:[7,9,8],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end);
      let len=arr.length;
      return {
        next(){
          if(index<len){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  
  for(let val of obj){
    console.log(val);
  }
}

// {
//   let arr=['hello','world'];
//   for(let value of arr){
//     console.log('value',value);
//   }
// }
