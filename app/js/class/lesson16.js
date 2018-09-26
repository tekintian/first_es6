 {
  //target类本身， name 修改类的名称  descriptor 该属性的描述对象
  let readonly=function(target,name,descriptor){
    descriptor.writable=false;
    return descriptor
  };

  class Det{
    @readonly
    datty(){
      return '2018-09-26';
    }
  }
  let dt=new Det();
  console.log(dt.datty());

  class Test{
    @readonly
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();

  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());
}


{
  let typename=function(target,name,descriptor){
    target.myname='hello';
  }

  @typename
  class Test{

  }

  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

//修饰器在日志中的应用示例
{
  let logging=(type)=>{
    return function(target,name,descriptor){
      let src_method=descriptor.value;
      descriptor.value=(...arg)=>{
        src_method.apply(target,arg);
        console.log(`logging ${type}`);
      }
    }
  }

  class Promo {
    constructor(args) {
      console.log('Promo constructor');
    }
    @logging('show')
    show(){
      console.log('show');
    }
    @logging('click')
    click(){
      console.log('click');
    }
  }
//实例化
  let pro = new Promo();
  //执行相关方法
  pro.show();
  pro.click();
}

//实例 2
{
  let log=(type)=>{
    return function(target,name,descriptor){
      let src_method=descriptor.value;
      descriptor.value=(...arg)=>{
        src_method.apply(target,arg);
        console.info(`log ${type}`);
      }
    }
  }

  class AD{
    @log('show') //后执行
    show(){
      console.info('ad is show')
    }
    @log('click')
    click(){
      console.info('ad is click');
    }
  }

  let ad=new AD();
  ad.show();
  ad.click();
}
