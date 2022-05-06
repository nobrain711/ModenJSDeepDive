//키 생성
var key = Symbol(`key`);
console.log(typeof key); //typeof는 해당 변수의 타입을 알 수 있다

//객채 생성
var obj = {};

//이름이 충돌할 위함이 없는 유일무일한 값인 심벌을 프로퍼티 키로 사용한다
obj[key] = `value`;
console.log(obj[key]);
