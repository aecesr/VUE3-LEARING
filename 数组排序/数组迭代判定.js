let players = [
  { name: "james", age: 36 },
  { name: "curry", age: 31 },
  { name: "kobe", age: 39 },
];
//every⽅法，判断是否数组每⼀个对象的年龄都⼤于30
let isGt30 = players.every(function (value, index, arr) {
  return value.age > 30;
});
console.log(isGt30); //true
//some⽅法，判断是否数组中有⾄少⼀个对象的名字包含cu
let isContainCu = players.some(function (value, index, arr) {
  return value.name.includes("cu");
});
console.log(isContainCu); //true
// ES6箭头函数的简写
// let isGt30 = players.every((value) => value.age > 30)
// let isContainCu = players.some((value) => value.name.includes("cu"))
