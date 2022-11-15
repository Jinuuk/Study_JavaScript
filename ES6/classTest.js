//Q1
class Dog {
  constructor(type,color){
    this.type = type;
    this.color = color;
  }
  한살먹기(){ //Q3
    if(this instanceof Cat){
      this.age++;
    }
  }
}

강아지1 = new Dog('말티즈','white');
강아지2 = new Dog('진돗개','brown');

console.log(강아지1);
console.log(강아지2);

//Q2
class Cat extends Dog {
  constructor(type,color,age){
    super(type,color);
    this.age = age;
  }
}

고양이1 = new Cat('코숏','white',5);
고양이2 = new Cat('러시안블루','brown',2);

console.log(고양이1);
console.log(고양이2);

//Q3
강아지1.한살먹기();
console.log(강아지1);

고양이1.한살먹기();
console.log(고양이1);

//Q4
class Unit {
  constructor(){
    this.공격력 = 5;
    this.체력 = 100;
  }
  get battlePoint(){
    return this.공격력 + this.체력;
  }
  set heal(heal){
    this.체력 = this.체력 + heal;
  }
}

var unit1 = new Unit();
console.log(unit1.battlePoint);
unit1.heal = 50;
console.log(unit1);

//Q5
var data = {
  odd : [],
  even : [],
  setData(...ele){
    for(var i = 0; i < ele.length; i++){
      if(ele[i]%2 == 0){
        this.even.push(ele[i]);
      }else{
        this.odd.push(ele[i]);
      }
    }
  },
  getData(){
    return [...this.odd, ...this.even].sort()
  }
}

data.setData(1,2,3,4,5);
console.log(data.getData());