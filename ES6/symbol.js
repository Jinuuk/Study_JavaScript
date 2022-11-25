// Symbol : Object 자료형의 비밀스런 key값
// var weight = Symbol('몸무게');

// var person = {name : '김참새'};

// person.weight = 65;
// console.log(person);

// person[weight] = 60; //반복문에서는 출력이 안됨 (enumerable X)
// console.log(person);

// var height = Symbol('키');
// person[height] = 174;
// var person = {name:'김참새', [height]:174};

// console.log(person);

// for(var key in person){
//   console.log(person[key]);
// }

//특징1 : 설명이 같다고 같은 심볼이 아님
var a = Symbol('설명1');
var b = Symbol('설명1');
console.log(a===b);

//특징2 : 전역 심볼
var a = Symbol.for('설명1');
var b = Symbol.for('설명1'); // var b = a와 같음
console.log(a===b);

//특징3 : 기본 내장 Symbol들
var arr = [2,3,4];
console.log(arr[Symbol.iterator]);
