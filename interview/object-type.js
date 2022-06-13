/**
 * @file 对象类型和原始类型的不同之处，函数参数是对象会发生什么问题？
 */

/* 1、 对象类型和原始类型不同之处是， 原始类型储存的是值，对象类型存储的类型是地址（指针） */

// 比如
// 赋值
const a = [];
const b = a;
b.push(1);
console.log(a); // [1]
console.log(b); // [1]

/* 2、 函数参数是对象的情况 */
function test(person) {
  person.age = 18;
  person = {
    age: 19,
    name: "peter",
  };
  return person
}

const p1 = {
	age: 20,
	name:'jack'
}
const p2 = test(p1);
console.log(p1); // { age: 18, name: 'jack' }
console.log(p2); // { age: 19, name: 'peter' }
