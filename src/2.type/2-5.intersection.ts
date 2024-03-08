// 交叉类型
// 如果是基本类型的话，不能即是number又是string，因此实际上会视作never。
let x:number&string

// x = 'Hello'

// console.log(x)

// 如果是对象的话，可以看做对于key类型的合成定义，譬如下列表示必须含有foo和bar
let obj:{foo:string}&{bar:number}

obj = {
  foo: 'Hello',
  bar: 123
}

console.log(obj)
