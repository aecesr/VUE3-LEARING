//过滤数组中所有年龄⼤于30的球员，返回值也是⼀个数组
let ageGt30Players = players.filter(function (value, index, array) {
  return value.age > 30;
});
console.log(ageGt30Players); //数组所有球员年龄都⼤于30，所以ageGt30Players =
players;
//将数组的中所有⼈的年龄都减⼩5岁
let young5Plauers = ageGt30Players.map(function (value, index, array) {
  return { name: value.name, age: value.age - 5, champions: value.champions };
});
console.log(young5Plauers); //球员对象的年龄变为31,26,34
//计算数组中球员，总冠军的数量
let championsNums = young5Plauers.reduce(function (prev, value, index, array) {
  return prev + value.champions;
}, 0);
console.log(championsNums); //11,三位球员的总冠军数量

// ES6语法简写
// let championsNums = players.filter(value => value.age > 30)
//  .map(value => {return {name:value.name,
// age:value.age - 5, champions:value.champions}})
//  .reduce((prev,value) => prev + value.champions ,0
// )
