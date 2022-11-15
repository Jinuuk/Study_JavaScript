class 할아버지 {
  constructor(name){
    this.성 = '김';
    this.이름 = name;
  }
  sayHi(){
    console.log('안녕');
  }
}

var 할1 = new 할아버지('만덕');
console.log(할1);

class 아버지 extends 할아버지 {
  constructor(name){
    super(name); //1.super() : 물려받는 class의 constructor을 의미
    this.나이 = 50;
  }
  sayHi(){
    console.log('안녕~');
    super.sayHi(); //2.super() : 부모의 prototype을 의미
  }
}

var 아1 = new 아버지('철수');
console.log(아1);
아1.sayHi();