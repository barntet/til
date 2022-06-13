/**
 * @file 常在笔试中见，类型转换
 * @description js类型转换只有三种情况
 * @example 转换为布尔值
 * @example 转换为数字
 * @example 转换为字符串
 */

/*------------to => boolean------------*/

/* number ->  Boolean */
// 除了一下情况其余都为 true
console.log(Boolean(0)); // false
console.log(Boolean(-0)); //false
console.log(Boolean(NaN)); //false

/* string -> Boolean */
// 除了空字符串其余都为 true
console.log(Boolean("")); // false

/* undefined、null -> Boolean */
// 否为false
console.log(undefined); // false
console.log(null); // false

/* {}、[] -> Boolean */
// 都为true
console.log({}); // true
console.log([]); // true

/*------------to => string------------*/

/* number -> String */
// 直接转换
console.log(String(1)); // 1

/* boolean、Symbol、函数 -> String */
// 直接转换
console.log(String(true)); // 'true'
console.log(String(function a() {})); // 'funciton a(){}'
console.log(String(Symbol())); // 'Symbol()'

/* array -> String */
// 转成字符串 ，相当于调用join(',')
console.log(String([1, 2, 3])); // '1,2,3'

/* object -> String */
console.log(String({})); // '[object Object]'

/*------------to => number ------------*/

/* string -> Number */
// 数值直接去掉冒号
console.log(Number("1")); // 1

/* array -> Number */
// 空数组为0 ，
// 存在一个元素且true => 1 false => 0, 数字或数字字符串专为对应数字
// 其余NaN
console.log(Number([])); // 0
console.log(Number([1, 2, 3])); // NaN
console.log(123, Number([["1"]])); // 1
console.log(1234, Number(false)); // 0
console.log(1235, Number(true)); // 1
console.log(Number([{ a: 2 }])); // NaN

/* null -> Number */
// 0
console.log(Number(null)); // 0

/*  除了数字的引用类型 */
// NaN
console.log(Number({})); // NaN
console.log(Number(function a() {})); // NaN
//  console.log('sy',Number(Symbol())); // Cannot convert a Symbol value to a Number


/* boolean -> Number */
console.log(Number(false)); // 0
console.log(Number(true)); // 1

/* udefined -> Number */
console.log(Number(undefined)); // NaN
