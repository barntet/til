# Accessing Arguments To A Function

arguments 是一个应对于传递给函数的参数的类数组对象

example
```
fuction test(a, b, c){
  console.log(arguments[0], a);
  console.log(arguments[1], b);
  console.log(arguments[2], c);
}
```

attribute

> arguments.callee 指向参数所属的当前执行的函数

> arguments.length 传递给函数的参数数量



