/**
 * @file compare operator
 */

/*
1、 如果是对象，就通过toPrimitive转换对象
2、 如果是字符串，就通过unicode，字符索引来比较
*/

let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return "1";
  },
};

console.log(a > -1)
