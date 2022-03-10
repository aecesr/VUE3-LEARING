//定义对象
class Player {
  //定义构造函数
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //定义成员方法
  toPrint() {
    console.log(this.name + "----" + this.age);
  }
}

class BestPlayer extends Player {
  constructor() {
    super();
    this.name = "jordan";
    this.age = 49;
  }
}

var plater1 = new Player("tom", 35);
plater1.toPrint(); //tom---35

let bestPlayer = new BestPlayer();
bestPlayer.toPrint(); //jordan---49
