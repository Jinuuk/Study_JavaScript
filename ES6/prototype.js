//prototype은 유전자와 비슷한 개념

function Student(name,age){
  //this는 새로 생성되는 object (instance)
  this.name = name;
  this.age = age;
  this.sayHi = function(){
    console.log('안녕하세요 '+this.name+'입니다.');
  }
}

Student.prototype.gender = '남';

var 학생1 = new Student('Lee',15);
var 학생2 = new Student('Park',16);

console.log(학생1.gender);
//1.학생1이 직접 gender를 가지고 있는가?
//2.학생1의 Student.prototype이 gender를 가지고 있는가?

console.log(학생1.toString());

//자바스크립트 내장함수를 사용할 수 있는 이유 => prototype

var arr = [1,2,3];
var arr = new Array(1,2,3); //실제 array가 만들어지는 방식

var obj = {};
var obj = new Object(); //실제 object가 만들어지는 방식

Array.prototype;
arr.sort();
arr.map();

//prototype은 함수에만 생성
//부모의 prototype을 검사하고 싶으면 __proto__
학생1.__proto__

var 부모 = {name : 'Kim'};
var 자식 = {};
자식.__proto__ = 부모;
console.log(자식.name);