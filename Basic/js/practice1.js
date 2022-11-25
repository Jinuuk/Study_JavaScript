// //Q1
// let age = 20;
// const origin = 'korea';

// //Q2
// var name = 'park';
// var id = 0;

// function showName(){
//   var name = 'kim';
//   var id = 1;
//   console.log(name);
// }

// showName();
// console.log(id);
// //kim, 0

// //Q3
// var 예금액 = 60000;
// var 미래예금액 = 0;

// function bank(money){
//   if(money < 50000){
//     미래예금액 = money*(1.15**2);
//   } else if (money >= 50000) {
//     미래예금액 = money*(1.2**2);
//   }
// }
// bank(예금액);
// console.log(미래예금액);

//Q4
var first = 360;

function total(input){
  console.log(input + input*(2/3) + input*((2/3)**2));
}

function total2(input){
  console.log(input/(1-(2/3)));
}

total(first);
total2(first);