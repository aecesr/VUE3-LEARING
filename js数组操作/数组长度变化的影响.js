//数组的length属性不是只读的，可以修改
let players = ["curry", "james", "kobe"];
//原始⻓度是3，将数组⻓度修改为2，相当于删除了末尾的⼀项。因此可以使⽤该属性完成数组末尾数据删除功能
players.length = 2;
console.log(players[2]); //数组下标是2（第三项，0开始），打印结果是undefined
//如果，将数组的length设置⼤于当前数组的项⽬，新加的每⼀项也都是undefined。

// 超过数组长度赋值的影响
let players = ["curry", "james", "kobe"]; //创建带有3个初始化项的数组
players[7] = "jordan"; //设置数组中第8项
console.log(players.length); //输出结果为8
console.log(players[5]); //undefined
//超出数组⻓度赋值，数组会⾃动扩充到指定项的⻓度。没有被赋值的项，为undefined

//检测一个数组的类型
console.log(Array.isArray(players)) //true，ES5⽅法，推荐使⽤
console.log(players instanceof Array) //true，多个js前端框架共⽤环境下可能有问题

//数组转字符串
let players = ["curry","james","kobe"]; //创建带有三个初始化项的数组
console.log(players.toString()); //curry,james,kobe。默认使⽤逗号分隔
console.log(players.toLocaleString()); //curry,james,kobe
console.log(players.join("&")); //curry&james&kobe,如果想⾃定义分隔符号使⽤join
