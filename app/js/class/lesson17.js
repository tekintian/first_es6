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

let A=123;
function test(){
  console.log('test')
}

let aaa=()=>{
	console.log('arrow function');
}

class Hello{
  test(){
    console.log('class')
  }
}
class MyTest{
	test(...arg){
		console.log(arg)
	}
}

export default {
  A,
  aaa,
  test,
  Hello,
  MyTest
}
