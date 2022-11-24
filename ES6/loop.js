//반복문
//1.코드 여러 번 실행할 때 사용
//2.Array, Object에서 자료를 꺼내쓸 때 사용

//일반 반복문
// for (var i = 0; i < 3; i++) {}

//forEach 반복문 : Array 전용
// [1,2,3].forEach();

//for in 반복문 : Object 전용
//1.enumerable한 것만 반복
// Object.getOwnPropertyDescriptor(obj,'name');
//2.부모의 prototype도 반복

// class 부모 {}
// 부모.prototype.name = 'Park';
// var obj = new 부모();
// var obj = {name:'Kim', age : 30};

// for (var key in obj) {
//   if(obj.hasOwnProperty(key)){
//     console.log(key);
//     console.log(obj[key]);
//   }
// }

//for of 반복문 : Array, String, arguments, NodeList, Map, Set
//1.iterable한 자료형에서만 사용 가능
// Array[Symbol.iterator]();
//2.

// var arr = [2,3,4,5];
// for (var data of arr) {
//   console.log(data);
// }

// for (var data of '참새') {
//   console.log(data);
// }

//Q1
// let data = [1,2,3,4,5,6,7,8,9];

// for (ele of data) {
//   let data2 = [...data];
//   data2.shift();
//   for (ele2 of data2){
//     console.log(`${ele2} X ${ele} = ${ele2*ele}`);
//   }
// }

//Q2
var products = [
  {
    name1 : 'chair',
    price1 : 7000,
  },
  {
    name2 : 'sofa',
    price : 5000,
  },
  {
    name1 : 'desk',
    price3 : 9000,
  },
];

let newKey;
let newValue;

for (data of products) {
  for (key in data) {
    if(!isNaN(key.charAt(key.length - 1))) {
      newKey = key.slice(0,-1);
      newValue = data[key];
      data[newKey] = newValue;
      delete data[key];
    }
  }
}

console.log(products);
