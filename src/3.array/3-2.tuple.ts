// 元组与数组的最大区别在于，数组是不定长的，而元组是定长的。元组在需要固定数量和类型的值时非常有用。

let arr1:number[] = [1, 2]

arr1.push(3)

console.log(arr1)
console.log(arr1[3])

// 上述代码，在元组中访问索引时会报错
let tuple1:[number, number] = [1, 2]
// 但元组调用push方法，是正常的。这是一个非常令人困惑的特性。
tuple1.push(3)

console.log(tuple1)
// console.log(tuple1[3])

// 使用元组定义类型
type Color = [
  red: number,
  green: number,
  blue: number
]

// 使用数组定义类型
type MyArray = number[]

// 在上述论断中，我们能够知道元组也是能够使用push等变异方法的。如果想要使元组只读，那么我们可以使用readonly。
let tuple2:readonly [number, number] = [1, 2]
// let tuple2:Readonly<[number, number]> = [1, 2]

// Property 'push' does not exist on type 'readonly [number, number]'
tuple2.push(3)

