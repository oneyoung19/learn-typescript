// 可选属性
type MyObj = {
  x: number,
  y?: number
}

// 只读属性
// 可以在属性前加上readonly 表示该属性是只读属性
interface MyInterface {
  readonly x: number,
  readonly y: string
}

const interface:MyInterface = {
  x: 1,
  y: 2
}

interface.x = 2
