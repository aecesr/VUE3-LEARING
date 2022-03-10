let playersObje = {'0':"curry",'1':"james",'2':"kobe",length:3};
let players = Array.from(playersObje);
console.log(players) //["curry", "james", "kobe"]
let playersSet = new Set(['curry','james','curry'])
players = Array.from(playersSet);
console.log(players) //["curry", "james"],Set可以去重