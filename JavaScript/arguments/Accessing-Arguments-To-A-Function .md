# Accessing Arguments To A Function

arguments 是一个应对于传递给函数的参数的类数组对象

example

```
function test(a, b, c){
  console.log(arguments[0], a);
  console.log(arguments[1], b);
  console.log(arguments[2], c);
}
```

attribute

> arguments.callee 指向参数所属的当前执行的函数

> arguments.length 传递给函数的参数数量

describe

1. arguments 对象是所有非箭头函数种都可用的局部变量
2. arguments 对象不是 Array。但类似 Array，除了 length 和索引之外没有任何 Array 属性
3. arguments 对象只能在函数内使用
4. typeof 检测 arguments 返回 object
5. 函数参数使用默认值时，arguments 不反应默认值，修改命名参数的值也不会影响 arguments 对象
6. 严格模式下，剩余参数、默认参数、解构赋值参数的存在不会改变 arguments 对象的行为。

```
4.
function funcTypeof(){
  console.log(typeof arguments);
}

funcTypeof(); / object



5.
function func(a = 10){
  a = 100;
  console.log(arguments[0]); // 始终得到传入的a
}
func(); // undefined
func(999); // 999


```
