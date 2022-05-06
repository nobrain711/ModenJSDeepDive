//01
var String;
String = "문자열"; //작은따음표
String = "문자열"; //큰따음표
String = `문자열`; //백틱(ES6에서 추가된 문자열 인식방법)
String = '작은따음표로 감싼 문자열은 "큰따음표"는 문자열로 인식한다';
String = "큰따음표로 감싼 문자열은 '작은따음표'는 문자열로 인식한다";

//02
var string = hello; //문자열로 인식하려면 따음표나 백터로 감싸야 한다

//03
//일반 문자열은 문자 개행이 안된다
//개행시 이스케이프 시퀸스로 작성한다
// var string = 'hello
// world.';

//04
var template = `Template Literal`; //백틱(`)으로 작석한 문자열을 Template Literal이라고 부른다
console.log(template);

//05
var template = `<ul>\n\t<li><a href="#">Home</a></li>\n</ul>`;
console.log(template);

//06
//Tempalate Literal는 개행 입력이 가능하다
var template = `<ul>
    <l1><a href="#">Home</a></li>
</ul>`;

console.log(template);
