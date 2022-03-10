let name = "curry";
let age = 33;

//ES5中写法
let player5 = {
  name: name,
  age: age,
  toPring: function () {
    console.log(plater5); //{name:"curry",age:33}
  },
};
player5.toPring(); //{name:"curry",age:33,toPrint:f}


// ES6写法
let player6={
    name,
    age,
    toPring(){
        console.log(player6);//{name:"curry",age:33}
    }
}