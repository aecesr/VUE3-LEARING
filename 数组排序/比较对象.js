let players = [
  { name: "james", age: 36 },
  { name: "curry", age: 31 },
  { name: "kobe", age: 39 },
];
function comparePlayer(player1, player2) {
  return player1.age - player2.age;
}
players.sort(comparePlayer);
console.log(players); //按照年龄排序
