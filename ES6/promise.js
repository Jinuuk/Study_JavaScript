// Promise 설명
// var 프로미스 = new Promise(function(resolve, reject){
//   //성공
//   resolve(); 

//   //실패
//   reject(); 
// });

// 프로미스.then(function(){
//   //프로미스가 성공일 경우 실행되는 코드
// }).catch(function(){
//   //프로미스가 실패할 경우 실행되는 코드
// }).finally(function(){
//   //프로미스 성공 또는 실패 상관없이 실행되는 코드
// })

// 예시1
// var 프로미스 = new Promise(function(resolve, reject){
//   var 연산 = 1+1;
//   resolve(연산); //파라미터가 then함수까지 전달
//   // reject(); 
// });

// 프로미스.then(function(result){
//   //프로미스가 성공일 경우 실행되는 코드
//   console.log('성공');
//   console.log(result);
// }).catch(function(){
//   //프로미스가 실패할 경우 실행되는 코드
//   console.log('실패');
// }).finally(function(){
//   //프로미스 성공 또는 실패 상관없이 실행되는 코드
// })

//예시2
// var 프로미스 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve();
//   },1000)
// });

// 프로미스.then(function(){
//   //프로미스가 성공일 경우 실행되는 코드
//   console.log('성공');
// }).catch(function(){
//   //프로미스가 실패할 경우 실행되는 코드
//   console.log('실패');
// }).finally(function(){
//   //프로미스 성공 또는 실패 상관없이 실행되는 코드
// })

//Promise의 3가지 상태
//1.대기 : pending
//2.성공 : resolved
//3.실패 : rejected

//Promise가 적용된 함수 예시
// $.ajax().done(function(){}).fail();
// fetch().then().catch() 등

//Q1
var promise1 = new Promise(function(resolve,reject){
  var $test = document.getElementById('test');

  $test.addEventListener('load',()=>{
    resolve();
  });
  $test.addEventListener('error',()=>{
    reject();
  })
})

promise1.then(()=>{
  console.log('성공');
}).catch(()=>{
  console.log('실패');
})

//Q2
// $.ajax({
//   type:'GET',
//   url : 'https://codingapple1.github.io/hello.txt '
// }).done(function(result){
//   console.log(result);
// })

var promise2 = new Promise(function(resolve,reject){
  $.ajax({
    type:'GET',
    url : 'https://codingapple1.github.io/hello.txt '
  }).done(function(result){
    resolve(result);
  })
})

promise2.then(function(result){
  console.log(result);

  var promise3 = new Promise(function(resolve,reject){
    $.get('https://codingapple1.github.io/hello2.txt').done(function(result){
      resolve(result);
    })
  });

  return promise3;
  
}).then(function(result){
  console.log(result);
})

//Q3
// $.ajax({
//   type:'GET',
//   url : 'https://codingapple1.github.io/hello.txt '
// }).done(function(result){
//   console.log(result);
// }).then(()=>{
//   $.ajax({
//     type:'GET',
//     url : 'https://codingapple1.github.io/hello2.txt '
//   }).done(function(result){
//     console.log(result);
//   })
// })