//Q1
// var 출석부 = ['흥민','영희','쳘수','재석','재석'];

// function searchName(name){
//   출석부.forEach(data=>{
//     if(name == data){
//       console.log('있어요');
//     }
//   });
// }

// function searchName(name){
//   for (let i = 0; i < 출석부.length; i++) {
//     if ( name == 출석부[i]) {
//       console.log('있어요')
//       return;
//     }
//   }
// }

// searchName('흥민');
// searchName('명수');
// searchName('재석');

//Q2
// for(let i=2;i<10;i++){
//   for(let j=1;j<10;j++){
//     console.log(i*j);
//   }
// }

//Q3
let scores = [10,20,30,40,50];
let scores2 = [40,40,40];

function 성적판별(scores,score){
  let sum = 0;
  scores.forEach(ele=>{
    sum += ele;
  });
  let avg = sum/scores.length;
  
  // score > avg ? console.log(`평균보다 ${score-avg}점 높습니다.`) : console.log(`평균보다 ${avg-score}점 낮습니다.`);

  if(score > avg){
    console.log(`평균보다 ${score-avg}점 높습니다.`);
  } else if (score < avg) {
    console.log(`평균보다 ${avg-score}점 낮습니다.`);
  } else {
    console.log(`평균 점수(${avg})와 동일합니다.`);
  }
}

성적판별(scores,40);
성적판별(scores2,20);