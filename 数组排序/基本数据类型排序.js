let values = [1, 2, 5, 10, 19];
values.reverse(); //数组倒序⽅法
console.log(values.toString()); //数组倒序：19,10,5,2,1
values.sort(); //数组排序⽅法
console.log(values.toString()); //数组正向排序：1,10,19,2,5//为sort()⽅法默认将每⼀项 toString()之后在⽐较

function compare(value1, value2) {
  //定义⽐较规则的函数
  return value1 - value2; //返回值三种可能，0，⼤于0，⼩于0
}
values.sort(compare); //使⽤⽐较规则
console.log(values.toString()); //排序结果：1,2,5,10,19
