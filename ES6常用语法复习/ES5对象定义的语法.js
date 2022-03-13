// const name = 'why';
// const age = 18;
// const height = 1.88

// const obj = {
//     name: name,
//     age: age,
//     height: height
// }
//定义对象
function Player() {
  this.name = name;
  this.age = age;
}
//定义对象的成员函数toPrint
Player.prototype.toPrint = function () {
  console.log(this.name + "-----------" + this.age);
};
var player1 = new Player("tom", 35);
var player2 = new Player("kobe", 39);
player1.toPrint(); //tom---35
player2.toPrint(); //kobe---39
