//01
/**데이터 타입의 필요성
 * 데이터 타입에 따라 저장할 메모리 공간을 미리지정이 가능하다
 * 데이터 타입에 따라 읽을 수 있는 크기가 다르다
 * ex)  char int = 4byte
 *      double = 8byte
 * 데이터 타입에 따라 읽는 방식이 다르다
 * ex)  int = 0100 0001 = 65
 *      char = 0100 0001 = 'A'
 */
var score = 100;

//02
/**정적 타입
 * java나 c의 경우는 변수를 선언 할 때 할당수 있는 데이터 타입을 선언해야 된다
 * 이를 명시적 타입 선언이라고 부른다
 * ex)  char c;(-128~127)
 *      int num;(-2,124,483,648~2,124,483,647)
 */
/**타입 체크(type check)
 * 컴파일 실행시 type에 맞는지 확인하는 작업으로 범위를 벗어나면 실행을 막는다
 * 일관성을 강제화 하여서 더욱 코드를 안정성 있게 해준다
 * 해당 언어 : C, C++, C#, Java, Kolin, Go, Haskell, Rust, Scala등
 */

//03
//typeof는 괄호 없이 공백을 주고 변수명을 기입하면 된다
var foo;
console.log(typeof foo);

foo = 3;
console.log(typeof foo);

foo = `Hello`;
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = Symbol();
console.log(typeof foo);

foo = {};
console.log(typeof foo);

foo = [];
console.log(typeof foo);

foo = function () {};
console.log(typeof foo);
