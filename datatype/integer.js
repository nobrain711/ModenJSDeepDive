//01
var integer = 10; //int
var double = 10.12; //double
var negative = -20; //음수

//02
var integer = 65;
var binary = 0b01000001; //2진수
var octal = 0o101; //8진수
var hex = 0x41; //16진수

console.log(binary);
console.log(octal);
console.log(hex);
console.log(integer);
console.log(binary == octal);
console.log(octal == hex);
console.log(hex == integer);

//03
//모든 숫자는 실수로 비교 해준다 ===는 데이터 형 까지 비교 해 준다
console.log(1 === 1.0);
console.log(4 / 2);
console.log(3 / 2);

//===보충 설명
var hex = 0x41;
console.log(hex == 65);
console.log(hex == "65");
console.log(hex === 65);
console.log(hex === "65");

//04
console.log(10 / 0);
console.log(10 / -0);
console.log(1 * "String");

//05
var x = nan; //js는 대소문자를 구분하는 언어로 구분을 안 할시 오류가 난다.
