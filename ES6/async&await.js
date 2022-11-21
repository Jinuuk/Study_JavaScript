//async
//async를 function앞에 붙이면 함수 실행 후 Promise 오브젝트가 남음
//성공만 가능
// async function plus(){
//   return 1+1;
// }

// plus().then(function(result){
//   console.log('성공');
//   console.log(result);
// })

// plus();

//await
async function plus(){
  var promise = new Promise(function(resolve,reject){
    var 힘든연산 = 1+1;
    // resolve(힘든연산);
    reject(힘든연산);
  });

  // promise.then(function(){
  //   console.log('성공')
  // });

  //프로미스 해결까지 기다림
  //async function 안에서 then 대신 사용 가능
  //실패 시 에러 발생 후 멈춤 -> try-catch문 사용
  try {
    var result = await promise; 
    console.log(result);
  } catch {
    console.log('실패');
  }
}

plus();


