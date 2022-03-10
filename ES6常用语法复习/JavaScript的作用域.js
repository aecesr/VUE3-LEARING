if (true) {
  //externalVal没有作用域
  var externalVal = "externalVal";
}

function domainTest() {
  var funVal = "funVal";
  //这里可以访问到externalVal和funVal
  console.log(externalVal + "----" + funVal);
}

domainTest();

if (true) {
  console.log(externalVal); //可以访问到externalVal
  // console.log(funVal);这一行访问不到变量，报错，因为funVal定义在函数里面，函数是有作用域的
}
