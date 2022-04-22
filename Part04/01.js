//04_01
//메모리에 주소만 들어가짐
10 + 20;

//04_02
/*JS에서의 객채는 Python 딕셔너리와 같은 구조로 이루어져 진다
 *둘의 공통점은 키와값으로 이루어 진다
 */
var userId = 1;
var UserName = "Lee";

var user = { id: 1, name: "Lee" };

console.log(user.id + " : " + user.name + "\n");
var users = [
  { id: 1, name: "Lee" },
  { id: 2, name: "Kim" },
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].id + " : " + users[i].name);
}

//04_03
/*
 *04_01에서 작성한 방식은 메모리만 차지 하지만
 *지금 작성할 방식은 메모리에 더한 값을 추가한다
 */
var result = 10 + 20;

console.log("\n" + result);
