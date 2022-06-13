/** 
 * @file 原始类型有哪几种？null是对象吗
 */

/* js中存在6种原始值，分别是 */
console.log(true,false); // boolean
console.log(1); // number
console.log('1'); // string
console.log(undefined); // undefined
console.log(null); // null
console.log('symbol'); // symbol

/* 注意点 */
/* 1、 原始累心存储的都是值，是没有函数可调用的，比如：*/
// console.log(1.toString());
// console.log(undefined.toString())

/* 2、为什么 ‘1’.toString()可以使用 */
// 因为在这种情况下‘1’已经不是原始类型了，而是背强制转换成了String类型，也就是对象类型，所以可以调用toString函数

/* 3、原始类型还有其他坑、number是浮点类型时候，使用中会遇到问题，经典问题 0.1 + 0.2 !== 0.3 */



/* --------------------------------------- */

// 虽然说 typeof null 输出 object ，但是这是js存在的一个历史问题，，
// null表示一个空对象指针，所以给typeof传null会返回object


