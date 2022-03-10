let noParam = function () {
  return 7;
};
//无参箭头函数
let noParamA = () => 7;



let sum = function (num1, num2) {
  return num1 + num2;
};
//带参数的箭头函数
var sumA = (sum1, sum2) => num1 + num2;



let sumAdd = function (num1, num2) {
  num1 += 5;
  num2 += 5;
  return num1 + num2;
};
//多行函数体的箭头函数
let sumAddA = (num1, num2) => {
  num1 += 5;
  num2 += 5;
  return num1 + num2;
};
