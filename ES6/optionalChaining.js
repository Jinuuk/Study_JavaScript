// optional chaining 연산자
// ?.왼쪽이 null, undefined면 undefined를 남김
// 중첩된 object 자료에서 자료를 추출할 때 reference 에러없이 안전하게 추출 가능

var user = {
  name : 'kim',
  // age : {value : 20}
};
console.log(user.age?.value);

// nullish coalescing 연산자
// ?? 왼쪽이 undefined, null이면 ?? 오른쪽 출력

var data;
console.log(data ?? '로딩중');