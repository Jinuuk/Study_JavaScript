//constructor(생성자) 용도 : 비슷한 object 생성

// var 학생1 = {
//   name:'Kim', 
//   age : 15,
//   sayHi : function(){
//       console.log('안녕하세요 '+this.name+'입니다.');
//     }
//   }

//   학생1.sayHi();

function Student(name,age){
  //this는 새로 생성되는 object (instance)
  this.name = name;
  this.age = age;
  this.sayHi = function(){
    console.log('안녕하세요 '+this.name+'입니다.');
  }
}

//상속
var 학생1 = new Student('Lee',15);
var 학생2 = new Student('Park',16);

console.log(학생1);
console.log(학생2);

학생1.sayHi();
학생2.sayHi();

//Q1,Q2
function Product(name,price) {
  this.name = name;
  this.price = price;
  this.VAT = function(){
    console.log(this.price*0.1);
  }
}

var product1 = new Product('shirts',50000);
var product2 = new Product('pants',60000);

console.log(product1);
console.log(product2);

product1.VAT();
product2.VAT();