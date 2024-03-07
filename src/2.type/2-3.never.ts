// never空类型，即该类型为空，不包含任何值。

function f():never {
  throw new Error('Error')
}

// function f():never {
//   // A function returning 'never' cannot have a reachable end point.
//   console.log('never')
// }

// function f():undefined {
//   console.log('never')
// }

let v1:number = f() // 不报错
let v2:string = f() // 不报错
let v3:boolean = f() // 不报错
