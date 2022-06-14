/**
 * @file 对象转原始类型
 */

// 对象转原始类型时，会调用内置的[[ToPrimitive]] 函数，对于函数来说，算法逻辑一般如下
/* 
1、 如果是原始类型，那就不需要转换
2、 如果需要转字符串类型就调用 x.toString()，转换为基础类型的话，就返回转换你的值，
   , 不是字符串的话就先调用valueof，如果是不是基础类型的话再调用toString()
3、 调用x.valueof(), 如果转换为基础类型，就返回转换的值
4、 如果没有返回原始类型，就会报错
5、 当然还是可以重写Symbol.toPrimitive, 该方法在转原始类型时调用优先级最高
*/

// 重写Symbol.toPrimitive

let a = {
  valueof() {
    return 0;
  },
  toString() {
    return "1";
  },

  [Symbol.toPrimitive]() {
    return 22;
  },
};

console.log(1 + a); // 23
