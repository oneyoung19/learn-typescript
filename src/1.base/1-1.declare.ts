// 类型声明
// 在变量或者表达式后边加冒号

let age:number = 19

function getName(name:string):string {
  return name
}

// yarn add @types/node -D
// https://www.zhihu.com/question/470016632/answer/1978489216
console.log(age)

// 报错
// let num:number = 'Hello world'

// const obj:object = {
//   name: 'Tom'
// }

// console.log(obj.name)

type Person = {
  name?: string
}

const obj:Person = {
  name: 'Tom'
}

console.log(obj.name)

const a:undefined = undefined
console.log(a)

const b:null = null
console.log(b)
