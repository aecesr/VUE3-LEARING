//加了一个setTimeout定时函数
class Player {
  constructor(nickname, age) {
    this.nickname = nickname;
    this.age = age;
  }
  toPrint() {
    // 解决问题1：额外定义this指针的替身
    // _this=this

    // 谁调⽤函数，函数内的this指针就指向谁,这里有一层setTimeout，setTimeout属于window对象的
    setTimeout(function () {
      console.log(this.nickname + "---" + this.age);
    }, 1000);
  }
  
  // 解决问题2：使用bind（this）
  //toPrint() {
  // setTimeout(function(){
  //     console.log(this.nickname+"---"+this.age);
  // }.bind(this),1000);
  // }
  //}

  // 解决问题3：箭头函数
  //toPrint() {
  // setTimeout(()=>{
  //     console.log(this.nickname+"---"+this.age);
  // },1000);
  // }
}
let plater1 = new Player("james", 35);
plater1.toPrint(); //undefined---undefined  //window没有nickname和age属性
