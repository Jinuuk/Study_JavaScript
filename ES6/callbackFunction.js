// // 자바스크립트는 기본적으로 동기식 처리
// console.log(1);
// console.log(2);
// console.log(3);

// console.log("======================")

// // 비동기식 처리
// console.log(1);

// // 비동기식 처리 도와주는 함수들
// setTimeout(()=>{console.log(2)},1000); 
// // .addEventListener('click',function(){});
// // $.ajax();

// console.log(3);

//자바스크립트를 순차적으로 실행하려면? 콜백함수 사용
// console.log(1);
// setTimeout(()=>{console.log(2)},1000); 
// addEventListener('click',function(){});

function 첫째함수(a){
  console.log(1);
  a();
}

function 둘째함수(){
  console.log(2);
}

// 첫째함수() 다음에 둘째함수()를 실행하고 싶으면

// X
// 첫째함수();
// 둘째함수();

첫째함수(둘째함수);

//콜백함수의 문제점
첫째함수(function(){
  둘째함수(function(){
    셋째함수(function(){

    })
  })
});

// 더 쉽게 쓰기위해 Promise 패턴 사용
첫째함수().then(function(){

}).then(function(){

})
