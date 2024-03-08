// type命令可以用来声明一个类型的别名

type Age = number

let age:Age = 15

// 别名支持使用表达式
type World = 'world'

type Greet = `Hello ${World}`
