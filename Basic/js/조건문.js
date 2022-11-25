//Q1
function 삼육구(num){
  if(num%3 == 0){
    console.log('짝!');
  } else {
    console.log(num+'!');
  }
}

//Q2
function 삼육구2(num){
  if(num%9 == 0){
    console.log('짝! 짝!');
  } else if (num%3 == 0){
    console.log('짝!')
  } else {
    console.log(num+'!');
  }
}

//Q3
function 합격여부(score1, score2){
  if((score1 < 0 || score1 > 100) || (score2 < 0 || score2 > 100)){
    console.log('점수는 0에서 100점 사이입니다.')
  } else if(score1 < 40 || score2 < 40){
    console.log('불합격');
  } else if (score1 + score2 >= 120){
    console.log('합격');
  } else {
    console.log('불합격');
  }
}

// 합격여부(70,70);
// 합격여부(30,100);
// 합격여부(50,50);

//Q4
function 삼육구3(num){
  let last = String(num);
  if(last == 3 || last == 6 || last == 9){
    console.log('짝!');
  } else {
    console.log(num+'!');
  }
}
