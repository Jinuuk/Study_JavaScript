// //자바스크립트 변수 종류 : var, let, const
// //변수의 특징 :선언, 할당, 존재 범위, 호이스팅

// //var : 재선언o, 재할당o, 범위 function
// var name = 'kim';
// var name = 'Park'; //재선언
// name = 'Lee' //재할당

// function fnc(){
//   var job = 'doctor'
//   job;
// }
// // console.log(job);

// //let : 재선언x, 재할당o, 범위 {}
// let age = 20;
// // let age = 30;
// age = 30;

// //const : 재선언x, 재할당x, 범위 {}
// const blood = 'A';
// // const blood = 'B;
// // blood = 'AB';

// const person = {name : 'Kim'}
// person.name = 'Park' //오류X -> 변수를 재할당한게 아님

// //재할당 불가능한 불변의 오브젝트를 만들고 싶으면?
// Object.freeze(person);
// // person.name = 'Park';

// //Hoisting : 변수의 선언을 변수 범위 맨 위로 끌고 오는 현상
// //함수의 선언도 호이스팅이 일어남
// console.log(gender); //에러 메서지가 아닌 undfined 출력

// var gender = 'male';

// console.log(gender);

// //변수 동시에 여러개 만들기
// var 나이 = 20 , 이름  = 'John ', 성별 = 'male'; //let, const도 가능

// //전역변수 : 모든 곳에서 쓸 수 있는 변수
// //1.변수를 가장 바깥에 만들기
// //2.window.name = 'kim'; <--- 권장하는 방식

//문제0
if(true){
  let a = 1;
  var b = 2;
  if(true){
    let b = 3;
  }
  console.log(b);
}

// //문제1
// 함수();
// function 함수() {
//   console.log(안녕);
//   let 안녕 = 'Hello!';
// }
//error 
//let, const는 호이스팅시 undefined 자동으로 할당 안 됨

// //문제2
// 함수();
// var 함수 = function() {
//   console.log(안녕);
//   var 안녕 = 'Hello!';
// } 
//error
//function 함수(){} : 전부가 호이스팅됨
//var 함수 = function(){} : 선언 부분만 호이스팅됨

// //문제3
// let a = 1;
// var 함수 = function() {
//   a = 2;
// }
// console.log(a);
// //1

// //문제4
// let a = 1;
// var b = 2;
// window.a = 3;
// window.b = 4;

// console.log(a + b);
// a는 1, b는 4

for (let i = 0; i < 5; i++) { 
  setTimeout(function() { console.log(i); }, i*1000 ); 
}