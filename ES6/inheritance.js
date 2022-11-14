//ES5
// Object.create(프로토타입object);

// var 부모 = {name:'Kim', age:50};
// var 자식 = Object.create(부모);

// console.log(자식.name);
// console.log(자식.age);

// 자식.age = 20;
// console.log(자식.age);

// var 손자 = Object.create(자식);

// console.log(손자.name);
// console.log(손자.age);

//ES6 (class)
class 부모 {
  constructor(name){
    this.name = name;
    this.sayHi = function(){ //자식이 직접 함수를 가짐
      console.log('hi')
    }
  }
  sayHello(){ //부모.prototype에 추가됨
    console.log('hello')
  }
}

var 자식 = new 부모();
console.log(자식);

자식.__proto__;
Object.getPrototypeOf(자식);