// interface是对象的模板，可以表示对象的各种语法，它的成员有 `5` 种形式：

// 1.对象属性

interface A {
  x: number,
  y: number
}

// 2.对象属性索引

// interface B {
//   [prop:string]: string,
//   [prop:number]: number
// }

// 如果既要定义字符串属性索引，又要定义数值属性索引。那么数值属性索引，需要服从字符串属性索引。

interface B {
  [prop:string]: string,
  [prop:number]: string
}

// 3.对象方法

interface C {
  fn(x: number): string
}

interface C {
  fn: (x: number) => string
}

interface C {
  fn: {
    (x: number): string
  }
}

// 4.函数

interface D {
  (x: number, y: number): string
}

const fn:D = (x, y) => String(x)

// 5.构造函数
// TODO: 构造函数和普通函数声明形式如何使用interface接口

interface E {
  new (message: string): string
}

// function MyFn (message):E {
//   return message
// }

// const MyFn:E = (message: string) => {
//   return message
// }

// class MyFn implements E {
//   constructor (message: string) {
//     return message
//   }
// }
