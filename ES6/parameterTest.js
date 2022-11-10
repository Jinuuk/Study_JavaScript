//Q1
var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];
console.log(c);
//['김','밥',1,2,3]

//Q2
var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b){
  console.log( [[...a], ...[...b]][1] )
}
c(a,b);
//[[1,2,3],'you','are']
//you

//Q3
function 함수(a = 5, b = a * 2 ){
  console.log(a + b);
  return 10
}
함수(3);
//9

//Q4
function 함수(a = 5, b = a * 2 ){
  console.log(a + b);
}
함수(undefined, undefined);
//15

//Q5
function 어레이(...rest){
  return rest;
}
var newArray = 어레이(1,2,3,4,5);
console.log(newArray);

//Q6
var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
console.log(Math.max(...numbers));

//Q7
function 정렬([...spread]){
  console.log(...spread.sort());
}

정렬('bear'); 

//Q8
function 글자세기(글자){
  var 결과 = {};
  [...글자].forEach(function(ele){
    if(결과[ele] > 0){
      결과[ele] = 결과[ele] + 1;
    }else{
      결과[ele] = 1;
    }
  });
  console.log(결과);
}

글자세기('aacbbb')