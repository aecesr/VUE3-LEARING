let players = ["curry", "james", "kobe"];
let players2 = players.concat("jordan", ["拉⾥伯德", "魔术师"]);
console.log(players2); //["curry", "james", "kobe", "jordan", "拉⾥伯德", "魔术师"]

//数组下标从0开始
//从第2项开始剪切到最后，["james", "kobe", "jordan", "拉⾥伯德", "魔术师"]
console.log(players2.slice(1));
//从第2项开始剪切到第5项，不包含第5项。 ["james", "kobe", "jordan"]
console.log(players2.slice(1, 4));
