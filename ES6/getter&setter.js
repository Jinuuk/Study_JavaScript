// var 사람 = {
//   name : 'Park',
//   age : 30,
//   get nextAge(){ //getter : return 필요
//     return this.age + 1;
//   },
//   set setAge(age){ //setter : 파라미터 1개 필요
//     this.age = parseInt(age);
//   }
// }

// // console.log(사람.age);
// // console.log(사람.nextAge());

// // 사람.setAge(20);
// // console.log(사람.age);

// 사람.setAge = '40';
// console.log(사람.age);

// console.log(사람.nextAge);

//class에도 getter, setter 사용 가능
class 사람 {
  constructor(){
    this.name = 'Park';
    this.age = 20;
  }
  get getAge(){
    return this.age;
  }
  set setAge(age){
    this.age = age;
  }
}

var 사람1 = new 사람();
console.log(사람1);
console.log(사람1.getAge);

사람1.setAge = 40;
console.log(사람1.getAge);