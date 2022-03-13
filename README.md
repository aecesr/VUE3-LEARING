# VUE3-LEARING

#### ES6常用语法复习

- var-const-let

  - javaScript 的作⽤域

  >重点：Javascript只有函数作⽤域，没有块级作⽤域。 也就是function⾥⾯定义的变量是有作⽤域的，if、for等代码块⾥⾯定义的变量是没有 作⽤域的。

  - const--常量

  > 我们希望定义的变量不要被⼆次赋值的时候（也就是常量），使⽤const关键字来定义。

  - var --var定义变量有局限性

  >var的作⽤域问题是JS语⾔在最初设计时候的⼀个缺陷，使⽤闭包可以弥补这个缺陷或使用let

  - let--let定义变量没有局限性

  > let定义的变量⾃带块级作⽤域。



- ES6对象的定义语法
  - class关键字，用来定义对象
  - constructro
  - this:当前对象

数组操作

- 数组的创建
  - new Array();
  - Array.of(）
  - [];
- 数组长度编号的影响

> 将数组的length设置⼤于当前数组的项⽬，新加的每⼀项也都是undefined。
>
> 超出数组⻓度赋值，数组会⾃动扩充到指定项的⻓度。没有被赋值的项，为undefined

-  如何检测⼀个数组的类型
   - Array.isArray(数组名)
   - 数组名 instanceof Array
-  数组转字符串

- (重点)如何⽤数组实现“栈”和“队列”

> 队列：先进先出，所以可以⽤push()和shift()⽅法配合实现队列，也可以使⽤unshift()配合 pop() 栈：先进后出，后进先出。所以可以使⽤push()和pop()来实现。也可以使⽤unshift()和shift() 来实现，但从语义的⻆度⽤前者更好。

- 数组的合并与剪切
  - concat可以合并⼀项，也可以合并⼀个数组。所以可以⽤它向数组末尾添加项。
  - slice可以剪切⼀个数组的元素成为⼀个新的数组
- 数组元素删除、插⼊、替换

- 数组成员的查找

  - 单纯的通过数据遍历⽐对，查找数组成员下标，⽤indexOf和lastIndexOf⽅法会更合适 
  - 如果需要更复杂复杂的规则查找数组成员，⽤find和findIndex⽅法更合适 
  - 上⽂中includes⽅式是ES6新⽅法，⽤于判断字符串的包含关系，返回值是布尔类型
  - find和findIndex⽅法参数是：当前的值，当前的数组成员下标，原数组

- (重点)for-in与for-of遍历数组

  - keys()、values()和entries()分别⽤于遍历数组的键(下标)、值、键值对。

(重点)数组迭代判定

- 迭代⽅法的三个参数：当前的值，当前的数组成员下标，原数组
- every，每⼀个 
- some，存在⼀些

(重点)数组的过滤与归并计算

- filter⽅法⽤于过滤数组的成员，满⾜条件的成员组成⼀个新的数组返回 
- map⽅法⽤于对数组成员处理，返回⼀个处理完成之后的数组 
- reduce⽤于对数组元素进⾏归并计算，和其他数组迭代⽅法不同，它的function有四个参 数。其中第⼀个参数⽐较特殊，表示上⼀次迭代计算的结果。
- reduce除了迭代函数function，还有⼀个参数为初始值，第⼀次计算时候prev=初始值。 我们这⾥设置为0

- - Array.from()的⽤法
    - Array.from()可以将类似数组的对象和可⽐遍历的对象(如:ES6的Set)转换为数组
  - copyWithIn()的⽤法
    - copyWithIn()⽤于将数组内的指定位置的成员，复制到其他位置（覆盖原有项）。
  - 

- Promise语法详解

  - Promise是⽤于处理异步操作及异步操作回调的结构优化语法，在ES6中被提出
  - JS 函数的参数不仅可以是字符串、数字等基本类型，也可以是函 数。
    - Pending (等待中)：Promise 的初始状态，异步操作进⾏中。如：⽹络请求正在处理，读 写⽂件正在进⾏。
    - Fulfilled (已实现)：异步操作已经实⾏成功。 
    - Rejected (已拒绝)：异步操作过程执⾏失败。
  - Promise基础语法
    - Promise异步操作主要由两部分组成，⼀是New Promise发起异步操作，⽽是then函数处 理异步操作结果 
    - Promise异步函数有两个参数，这两个参数也是函数，resolve和reject。 
    - 当resolve函数被调⽤，表示异步操作成功。then函数的第⼀个函数参数⽅法被回调。可 以传递⼀个对象作为成功处理的结果参数，如图中的data={} 
    - 当reject函数被调⽤，表示异步操作失败。then函数的第⼆个函数参数⽅法被回调。同样 可以传递⼀个对象作为失败处理的结果参数，如图中的err= Error对象。

- 链式调⽤
  - then函数如果只有⼀个参数，那就是异步操作成功的回调函数。then函数的第⼆个函数 参数是可选的。 
  - 链式调⽤的catch函数的参数，是异步操作失败的回调函数。

> 当你想要获取异步操作的处理结果的时候，使⽤Promise！

### Vue基础语法

#### Vue中应用和组件的概念

- createApp表示创建一个Vue应用，存储到app变量中
- 传入的参数表示，这个应用最外层的组件，应该如何展示
- mvvm设计模式
  - m->model数据 data()
  - v->view视图 template:
  - vm->viewModel视图数据连接层(Vue组件实现)
- comsole中可以通过vm.$data.message='bye': 改变Vue组件中data的数值

#### 理解Vue的生命周期函数

- 在‘某一时刻’会‘自动执行’的函数
- 四类、八个生命周期函数
  1. Vue实例创建函数
     -  beforeCreate() 在Vue实例生成之前会自动执行的函数
     -  created() 在Vue实例生成之后会自动执行的函数
  2. 页面渲染函数
     - beforeMount()在组建内容被渲染到页面之前自动执行的函数
     - mounted()在组建内容被渲染到页面之后自动执行的函数
  3. 数据更新函数
     -  beforeUpdate()当data中的数据发生变化时自动执行的函数
     -  updated() 当data中的数据发生变化，同时页面完成更新后，会自动执行的函数
  4. Vue实例销毁函数
     -  beforeUnmount()当Vue应用失效时自动执行的函数
     -  unmounted()当Vue应用失效且DOM完全销毁之后，自动执行的函数

#### 常用模板语法

- 插值表达式Mustache

  - 把模型数据插入到当前页面
  - 变量
    - 直接显示变量
    - 访问变量的属性
  - 表达式
    - 字符串的拼接
    - 简单的算术运算
    - 三目运算
    - 调用自定义函数
    - 调用JavaScript自带函数

- v-html与v-pre指令

  - 如果要将html原样输出，直接使用{{}}就可以了
  - 如果是要浏览加解析html后展示，就使用v-html
  - v-pre可以让{{}}内容原样输出

- v-text与v-cloak

  - v-text解决网速慢的时候存在闪屏问题 
  - v-cloak既可以插值，又可以解决闪屏问题 

- v-once

  - 被定义了 v-once 指令的元素或组件（包括元素或组件内的所有子孙节点）只能被渲染一次。首次渲染后，即使数据发生变化，也不会被重新渲染。一般用于静态内容展示。

- v-if和v-show

  -  v-if是直接在DOM数上删除 （频繁操作不建议使用）

  -  v-show是让数据display:none

- 通过过滤器实现数据格式化

- v-on指令

  - JS常用事件
    - 鼠标
    - 键盘
  - 事件修饰符
    - .stop  阻止冒泡
    - .prevent 阻止默认事件
    - .capture
    - .self
    - .once
    - .passive

- 按键修饰符

  - .enter
  - .tab
  - .delete
  - .esc
  - .space
  - .uo
  - .down
  - .left
  - .right
  - 系统修饰键盘
    - .ctrl
    - .alt
    - .shift

- 常见的语法糖

  - @
    - v-on:
  - ：
    - v-bind:
  - #
    - v-slot:
