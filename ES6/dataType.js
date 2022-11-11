//primitive data type : 변수에 값이 그대로 저장됨
var 변수 = 1234;

//reference data type : 변수에 reference가 저장됨 (array, object)
var 어레이 = [1,2,3];
var obj = {name : 'kim'};

//차이점
var 이름1 = '김';
var 이름2 = 이름1;
이름1 = '박';
console.log(이름1);
console.log(이름2);

// var 이름3 = {name:'김'};
// var 이름4 = 이름3;
// 이름3.name = '박';
// console.log(이름3);
// console.log(이름4);

var 이름3 = {name:'김'};
var 이름4 = {name:'김'};
console.log(이름3 == 이름4);

// function 변경(obj){
//   obj.name = 'Park';
// }

function 변경(obj){
  obj = {name : 'Park'}
}

변경(이름3);
console.log(이름3);