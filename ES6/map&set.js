//Map 자료형
//자료간의 연관성을 표현하기 위해 사용
//Object 자료형은 키값으로 글자만 가능
//Map 자료형은 키값으로 모두 가능

// var person = new Map();
// person.set('name','Kim');
// person.set('age',20);

// var person = new Map([
//   ['name','Kim'],
//   ['age',20]
// ])

// console.log(person);


// //자료 꺼내기
// person.get('name');
// console.log(person.get('name'));

// //자료 삭제
// person.delete('name');
// console.log(person.get('name'));

// //자료 갯수 세기
// console.log(person.size);

//반복문
// for (var key of person.keys()){
//   console.log(key);
// }


//Set 자료형
//중복 자료를 허용하지 않는 Array와 비슷한 자료형

// var 출석부 = ['john','tom','andy','tom'];
// console.log(출석부);

// var 출석부2 = new Set(['john','tom','andy','tom']);
// console.log(출석부2);

// //자료 추가
// 출석부2.add('sally');
// console.log(출석부2);

// //자료 제거
// 출석부2.delete('sally');
// console.log(출석부2);

// //존재 여부 확인
// console.log(출석부2.has('sally'));

// //자료 갯수 확인
// console.log(출석부2.size);

//Set <-> Array
var 출석부 = ['john','tom','andy','tom'];
var 출석부2 = new Set(['john','tom','andy','tom']);
출석부 = [...출석부2];
console.log(출석부);

//반복문
