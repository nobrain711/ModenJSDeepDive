/**변수 선언시 주의 사항
 * 변수명은 모든언어 같은 방식으로 선언된다
 * 예약어를 변수명으로 선언은 불가능하다
 * 변수명은 관련된 이름으로 선언해줘야 하낟
 * 단어가 2개이상 쓰이는 변수는 카멜표기법이나 _로 구분 해야된다
 * 영어 한글 숫자는 모두 사용이 가능하고 _,$를 제외한 특수기호는 사용이 불가능하다
 * 처음 선언시 올 수 있는 글자는 영어 특수기호 중에 _,$가 올 수 있다
 */

var person, $elem, _name, first_name, val1;

//04_13
//JS의 ES5부터 변수명 생성시 유니코드 문자허용하여 영어외 다른언어 사용가능
var 이름, 名前;

/**04_14
 * var first-name;  -가 에러
 * var 1st          처음에 숫자가 와서 에러
 * var this         예약어가 와서 에러
 */

//04_15
//JS의 경우 대소문자를 구분한다
var firstname;
var Firstname;
var FIRSTNAME;

//04_16
var x = 3; //주석을 안달아 주면 의미를 모른다
var score;

//04_17
var d;
var elapsedTimeInDays;

//04_18
//카멜 케이스
var firstName;

//스네이크 케이스
var FirstName;

//헝가리언 케이스
var strFirstName;
var $elem = document.getElementById("myId"); //DOM 노트
var observable$ = fromEvent(document, "click");
