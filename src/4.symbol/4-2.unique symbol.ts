// unique symbol类型相对symbol类型 有如下区别：

// 1.unique symbol类型只能使用const声明，不能使用let声明
// 2.unique symbol类型不能重新赋值

// A variable whose type is a 'unique symbol' type must be 'const'
// let symbol1:unique symbol = Symbol()

const symbol1:unique symbol = Symbol()

const symbol2:unique symbol = Symbol()

// This comparison appears to be unintentional because the types 'typeof symbol1' and 'typeof symbol2' have no overlap.
// console.log(symbol1 === symbol2)

// Cannot assign to 'symbol1' because it is a constant.
symbol1 = symbol2

