//includes()
console.log('abc'.includes('a'));
console.log('abc'.includes('d'));

//정규식 : 문자를 검사할 수 있는 식
console.log(/a/.test('abc'));

//문자 범위 지정 가능

//a-z 중 아무 글자 하나
console.log(/[a-z]/.test('abc')); 

//아무 알파벳 하나
console.log(/[a-zA-Z]/.test('abc'));

//아무 한글 자음 하나
console.log(/[ㄱ-ㅎ가-힣]/.test('안녕')); 

//아무 숫자 하나
console.log(/[0-9]/.test('안녕')); 

//아무 문자 하나
console.log(/\S/.test('안녕'));

//a로 시작하는 글자
console.log(/^a/.test('asdf'));

//a로 끝나는 문자
console.log(/a$/.test('asdf'));

//a 또는 b가 있는지 검사
console.log(/a|b/.test('asdf'));

//이메일 형식 검사
console.log(/\S+@\S+\.\S+/.test('aaa@bbb.ccc'));
