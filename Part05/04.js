function foo() {
  return;
  {
  }
}
//개발자 예측 return {}
//ASI예측 위에 방삭

console.log(foo());

var bar = function () {};
(function () {})();
