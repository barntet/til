/**
 * @file typeof 是否能正确判断类型？ insstaceof能正确判断对象的原理是什么吗
 */

/* 1、 typeof 对于原始类型来说，除了null 都可以现实正确的类型 */
console.log(typeof 1); // number
console.log(typeof "1"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
// null 现实object
console.log(typeof null); // object

/* 2、typeof 对于对象来说，除了函数都会现实 object ，所以说typeof 并不能正确的判断变量是到底什么类型 */
console.log(typeof []); // object
console.log(typeof {}); // object
// 函数现实function
console.log(typeof console.log); // function

/* 2、如果想判断一个对象的正确类型，这时候可以考虑 instanceof */
// instanceof 内部是通过原型链来判断的
const Person = function () {};
const p1 = new Person();
console.log(p1 instanceof Person); // true

const str = "hello world";
console.log(str instanceof String); // false

const str1 = new String("hello world");
console.log(str1 instanceof String); // true

/* 3、对于原始类型来说不能直接通过 instanceof 判断类型 ， 当然还是有办法的 */
class PrimitiveString {
	// Symbol.hasInstance 就是能让我们自定义instanceof行为的东西
	// https://es6.ruanyifeng.com/#docs/symbol
  static [Symbol.hasInstance](x) {
    return typeof x === "string";
  }
}

console.log("hello world" instanceof PrimitiveString); // true
// 以上代码等同于 typeof ‘hello world' === 'string'
// 所以这里也侧面反应了instanceof不一定完全正确