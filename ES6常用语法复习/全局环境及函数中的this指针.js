console.log(this === window); //true
console.log(this.document === document); //true
//全局环境中，this指针指向window全局对象。

//函数中的this指针，谁调用函数，函数内的this指针就指向谁
function test1() {
  return this; // 和上面的写法一眼，上面的属于简写，我们平时经常忽略掉window全局对象的存在
}
console.log(test1() == window); //true
console.log(window.test1() == window); //true

function test2() {
  "use strict"; //使用严格模式
  return this;
}

console.log(test2() == undefined); //true
console.log(window.test2() == window); //true

