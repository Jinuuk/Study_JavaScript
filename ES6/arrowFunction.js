// var fnc = a =>  a + 10;

// fnc(5);

// //장점 
// //1.입출력 기계를 만들 때 보기 쉬움
// //2.파라미터가 1개면 소괄호 생략 가능
// //3.코드 한 줄이면 중괄호 생략 가능

// //사용 예시
// //1.forEach 콜백 함수
// [1,2,3,4].forEach(a=>console.log(a))

// //2.eventListener
// document.getElementById('').addEventListener('click',
// e => {
//   this;
// });
// //일반 이벤트 리스너 : this == e.currentTarget
// //arrow function 이벤트 리스너 : this == 바깥의 this값

// //3.Object 안의 함수
// var obj = {
//   fnc : () => {
//     return this //window
//   }
// }

//this & arrow function 연습 문제 3개
//문제1
var person = {
  name : '손흥민',
  sayHi : function(){
    console.log('안녕 나는 '+this.name)
  }
}

person.sayHi();

//문제2
var data = {
  data : [1,2,3,4,5]
}

data.addAll = function(){
  console.log(this.data.reduce((sum, currValue) => sum + currValue));
}

data.addAll();

//문제3
document.getElementById('btn3').addEventListener('click',function(){
  setTimeout(() => console.log(this.innerHTML),1000)
});




