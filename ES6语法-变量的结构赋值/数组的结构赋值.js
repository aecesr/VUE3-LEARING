//数组结构赋值 等号左侧赋值变量数组和等号右侧被解构的数组，能够在模式上正确匹配。
let [plater1, plater2, plater3] = ["curry", "james", "kobe"];
console.log(plater2); //james
//规则模式匹配，嵌套数组结构赋值
let [plater4, [[plater5], plater6]] = ["curry", [["james"], "kobe"]];
console.log(plater5); //james
//非规则模式匹配，嵌套数组结构赋值
let [plater7, [[plater8], plater9]] = ["curry", [["james", "jordan"], "kobe"]];
console.log(plater7); //curry
console.log(plater8); //james
console.log(plater9); //kobe
//数组结构数组赋值
let [plater10, ...other] = ["curry", "james", "kobe"];
console.log(plater10); //curry
console.log(other); //["james","kobe"]
//数组结构，默认值设置
let [plater11, plater12 = "me"] = ["curry"];
console.log(plater11); //curry
console.log(plater12); //me
