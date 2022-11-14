// //Q0
// function Student(name,age) {
//   this.name = name;
//   this.age = age;
//   this.sayHi = function(){
//     console.log("안녕 나는 "+this.name+"이야")
//   }
// }

// var 학생1 = new Student('Kim',20);
// var 학생2 = new Student('Park',21);
// var 학생3 = new Student('Lee',22);

// console.log(학생1);
// 학생1.sayHi();

// //Q1.다음 코드의 출력 결과는?
// function Parent(){
//   this.name = 'Kim';
// }
// var a = new Parent();

// a.__proto__.name = 'Park';
// console.log(a.name)

// //Q2.함수가 제대로 작동하지 않는 이유
// function Student(이름, 나이){
//   this.name = 이름;
//   this.age = 나이;
// }

// Student.prototype.sayHi = () => {
//     console.log('안녕 나는 ' + this.name + '이야');
//   }
// var 학생1 = new Student('Kim', 20);

// 학생1.sayHi();

//Q3.
var arr = [1,2,3];

console.log(arr); //[1,2]

Array.prototype.remove = function(ele){
  for (var i = 0; i < this.length; i++){
    if(this[i] === ele){
      this.splice(i,i);
    }
  }
};

arr.remove(2);
console.log(arr);