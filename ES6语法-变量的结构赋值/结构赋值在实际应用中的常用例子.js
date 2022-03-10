// 一个复杂点的例子，对象结构赋值，在函数参数上的应用
function add([{ name: name1, age: age1 }, { name: name2, age: age2 }]) {
  return (age1 = age2);
}
console.log(
  add([
    { name: "james", age: 35 },
    { name: "curry", age: 31 },
  ])
); //66

//利用变量结构进行，数据交换（想一想如果没有变量解构，数据交换怎么写？）
let a = 2;
let b = 3;
[a, b] = [b, a];
console.log(a + "----" + b); //3----2;

//介绍ES6的一种新数据类型map
let map1 = new Map();
map1.set("p1", "curry");
map1.set("p2", "james");
//遍历map数据结构的key和value
for (let [key, value] of map1) {
  console.log(`${key}---${value}`); //es6模板字符串
  console.log(key + "-----" + value); //同样的效果
}
