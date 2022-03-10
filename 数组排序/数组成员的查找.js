let players = ["curry", "james", "kobe", "james", "curry"];
//这两个⽅法在找不到数据时，返回-1
console.log(players.indexOf("james")); //1,从数组头部查找数据返回下标位置
console.log(players.lastIndexOf("james")); //3,从数组末尾查找数据返回下标位置
//查找符合条件的第⼀个数组成员,找不到返回undefined
let findOne = players.find(function (value, index, arr) {
  return value.includes("cu");
});
console.log(findOne); //curry,curry包含cu
//查找符合条件的第⼀个数组成员下标，找不到返回-1
let findOneIndex = players.findIndex(function (value, index, arr) {
  return value.includes("cu");
});
console.log(findOneIndex); //0,curry包含cu，第⼀个元素下标是0。
//上⽂的find可以简写为:
//let findOne = players.find((value,index,arr) => value.includes("cu"))
//let findOne = players.find((value) => value.includes("cu")) //只传第⼀个参数
