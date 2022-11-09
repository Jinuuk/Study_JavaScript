// var array = ['hello', 'world'];

// 1.array에 붙이면 대괄호 제거
// console.log(array);
// console.log(...array);

// 2.문자에 붙이면 글자를 펼쳐줌 
// var 문자 = 'hello';
// console.log(문자);
// console.log(...문자);

// 활용 예시 : array 합치기/복사
// var a = [1,2,3];
// var b = [4,5];
// var c  = [...a, ...b];
// console.log(c);

//Deep copy할 때 유용
// var d = [1,2,3];
// var e = d; //등호로 복사하면 값을 공유 (reference data type : array, object)
// console.log(d);
// console.log(e);

// d[3] = 4;
// console.log(d);
// console.log(e);

// var a = [1,2,3];
// var b = [...a];

// a[3] = 4;

// console.log(a);
// console.log(b);

//활용 예시 : 오브젝트 합치기/복사
// var o1 = {a:1, b:2};
// var o2 = {...o1, c:3};
// console.log(o2)

// var o3 = {...o1};
// console.log(o3);

//값 중복이 일어나면?
//가장 뒤에 있는걸 적용


//활용 예시 : 함수 파라미터 넣을 때
function 더하기(a,b,c){
  console.log(a+b+c)
}

더하기(1,2,3);
var arr = [10,20,30];
더하기.apply(undefined,arr); //옛날 방식
더하기(...arr); //요즘 방식

//apply 함수 개념
var person = {
  인사 : function(){
    console.log(this.name + '안녕')
  }
}

person.인사();

var person2 = {
  name : '손흥민'
}

person.인사.apply(person2, [parameter]); //파라미터가 array형태
person.인사.call(person2,  parameter)