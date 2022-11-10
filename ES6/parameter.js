//1.default parameter
//숫자뿐만 아니라 변수, 함수 등 설정 가능
function add(a,b = 10){ 
  console.log(a+b)
}

add(1,2);
add(1);


//2.arguments
function fnc(a,b,c){
  // console.log(a,b,c);

  // console.log(arguments);

  // console.log(arguments[0]);
  // console.log(arguments[1]);
  // console.log(arguments[2]);

  for(let i = 0; i<arguments.length; i++){
    console.log(arguments[i]);
  }
}

fnc(1,2,3);

//3.rest parameter
//...자리에 오는 모든 파라미터를 []에 보관
function fnc2(a,b, ...rest){
  console.log(rest);
}

fnc2(1,2,3,4,5,6);

function fnc3(...rest){
  // console.log(rest[0]);
  // console.log(rest[1]);
  // console.log(rest[2]);
  // console.log(rest[3]);

  for(var i =0; i<rest.length; i++){
    console.log(rest[i])
  }
}

fnc3(1,2,3,4);