let players = [
  { name: "james", age: 36, champions: 3 },
  { name: "curry", age: 31, champions: 3 },
  { name: "kobe", age: 39, champions: 5 },
];
players.forEach(function (value, index, array) {
  //这个⽅法没有返回值，可以在这⾥执⾏⼀些操作，⽐如渲染⼀个table
  console.log(`<tr>${value.name}</tr>`); //这⾥使⽤了ES6语法，避免字符串拼接
});
