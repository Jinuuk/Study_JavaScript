// //this 뜻 4가지
// //1.window object
// console.log(this);

// function 함수(){
//   console.log(this);
// }

// 'use strict' //자바스크립트 strict mode;

// console.log(this); //window

// function 함수(){
//   console.log(this); //undefined
// }

// var obj = {
//   data : 'Kim',
//   fnc : function(){
//     console.log(this) //2.오브젝트 내 함수안에서 쓰면 그 함수를 가지고 있는 오브젝트를 뜻함
//   }
// }

// console.log(obj.data);
// obj.fnc();

// var obj2 ={
//   data : {
//     fnc : function(){
//       console.log(this)
//     }
//   }
// }

// obj2.data.fnc();

// var obj3 = {
//   data : {
//     fnc : ()=>{
//       console.log(this) //window
//     }
//   }
// }

// obj3.data.fnc();

// var obj4 = {
//   data : {
//     fnc(){
//       console.log(this)
//     }
//   }
// }

// obj4.data.fnc();

// //함수나 변수를 전역공간에서 만들면 {window}에 보관
// //1과 2는 사실상 같은 뜻
// // this : 그 함수를 가지고 있는 오브젝트를 뜻함

// function machine(){
//   this.name = 'kim' //3.새로 생성되는 오브젝트(instance)
// }

// var obj5 = new machine();
// console.log(obj5);

// document.getElementById('btn').addEventListener('click',
// function(e){
//   console.log(this);
//   console.log(e.currentTarget);
//    //4.e.currentTarget;과 같은 의미
// })

// document.getElementById('btn2').addEventListener('click',
// function(e){
//   var arr = [1,2,3];
//   arr.forEach(function(a){
//     console.log(this); //window
//   })
// })

// var obj6 = {
//   names : ['김','이','박'],
//   fnc : function(){
//     console.log(this); //obj6
//     obj6.names.forEach(function(){
//       console.log(this); //window
//     })
//   }
// }

// obj6.fnc();

var obj7 = {
  names : ['김','이','박'],
  fnc : function(){
    console.log(this); //obj7
    obj7.names.forEach(()=>{
      console.log(this); //obj7 *arrow fucntion 특징 : 내부의 this값을 변화시키지 않음 (외부 this값 그대로 재사용 가능)
    })
  }
}

obj7.fnc();
