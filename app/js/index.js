class Test{
    constructor(){
        this.a='This is ES6 compile test';
    }
}


let test=new Test();

document.getElementById('first_test').innerHTML=test.a
