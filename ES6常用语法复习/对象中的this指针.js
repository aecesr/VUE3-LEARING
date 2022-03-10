//定义对象
class Player {
  //定义构造函数
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //定义成员方法
  toPrint() {
    console.log(this.name + "---" + this.age);
  }
}
var plater1 = new Player("james", 35);
plater1.toPrint(); //james---35
//在对象中，this，指针指向的就是对象本身。this可以引用对象的属性和方法