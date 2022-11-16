// var arr = [2,3,4];

// // var a = arr[0];
// // var b = arr[1];
// // var c = arr[2];

// var [a,b,c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);

// console.log('========================')

// var [a,b,c=10] = [2,3];
// console.log(a);
// console.log(b);
// console.log(c);

// console.log('========================')

// var [a,b,c=10] = [];
// console.log(a);
// console.log(b);
// console.log(c);

// console.log('========================')

// var obj = {name:'Kim', age:30};

// // var name = obj.name;
// // var age = obj.age;

// var {name, age} = {name:'Kim', age:30};
// //변수명과 key명이 일치해야 한다.
// console.log(name);
// console.log(age);

// console.log('========================')

// var {name, age = 10} = {name:'Kim'};

// console.log(name);
// console.log(age);

// console.log('========================')

// var {name : 이름 = 'Park', age = 10} = {};

// console.log(이름);
// console.log(age);

console.log('========================')
//응용

var name = 'Kim';
var age = 30;

// var obj = {name : name, age : age};
// console.log(obj);

var obj = {name, age};
console.log(obj);

console.log('========================')

var obj2 = {name:'Kim',age:30};

function 함수({name, age}){
  console.log(name);
  console.log(age);
}

함수(obj);

console.log('========================')

function 함수2([a,b]){
  console.log(a);
  console.log(b);
}

함수2([1,2]);

//Q1
var [number, address] = [ 30, 'seoul' ];
var {address : a , number = 20 } = { address, number };

//Q2
let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

var {body, size} = 신체정보;
var {height:키,weight:몸무게} = body;
var [상의사이즈, 하의사이즈] = size;

console.log(키);
console.log(몸무게);
console.log(상의사이즈);
console.log(하의사이즈);

// let {
//   body: {
//     height, 
//     weight
//   },
//   size: [ 상의, 하의 ]
// } = 신체정보;