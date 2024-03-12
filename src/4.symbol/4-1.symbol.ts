// symbol类型是固定且唯一的
let symbol1:symbol = Symbol()
let symbol2:symbol = Symbol()

console.log(symbol1)

// symbol类型是唯一的
console.log(symbol1 === symbol2)

// 但symbol类型是可以重新赋值的
symbol1 = symbol2

// 我们尝试使用下readonly 发现readonly只允许在array或者tuple中使用
// let symbol3:readonly symbol = Symbol()

// symbol3 = symbol2

// 因此如果要声明一个symbol变量，且这变量是彻底固定的，不能重新赋值。那么就需要使用unique symbol
