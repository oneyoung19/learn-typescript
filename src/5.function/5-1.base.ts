// 函数声明

function getA(a:string, b:string):void {
  console.log('A')
}

function getB(a:string, b:string):string {
  return 'B'
}

// 函数表达式

const getC = function (a:string, b:string):void {
  console.log('C')
}

const getD = function (a:string, b:string):string {
  return 'D'
}

const getE:(a:string, b:string) => string = function (a, b) {
  return 'E'
}

type MyFunction = (a:string, b:string) => string

const getF:MyFunction = function (a, b) {
  return 'F'
}

// getF.f = 'F'

// 函数类型 还可以用对象来表示

const getG:{
  (a:string, b:string): string,
  g:string
} = function (a, b) {
  return 'G'
}

getG.g = 'G'

// 箭头函数

const getH = (a:string, b:string):string => 'H'

