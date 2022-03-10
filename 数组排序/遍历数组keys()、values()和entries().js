let players = ["curry", "james", "kobe"];
for (let index of players.keys()) {
  console.log(index); //打印是0,1,2
}
for (let elem of players.values()) {
  console.log(elem); //打印是"curry","james","kobe"
}
for (let [index, elem] of players.entries()) {
  console.log(index, elem); //打印如下
}
//0 "curry"
//1 "james"
//2 "kobe"
