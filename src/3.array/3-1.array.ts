// 纯数字
let arr1:number[] = []

// 纯字符串
let arr2:string[] = ['a', 'b', 'c']

// 纯数字的另一种写法
let arr3:Array<number> = [1, 2, 3]

// 数字或者字符串类型
let arr4:(number|string)[] = ['a', 'b', 1, 2]

// 数字、字符串或者对象类型
let arr5:(number|string|object)[] = []

// 如果数组没有定义类型，则会被推断为 any[]
let arr6 = []

// 数组本身是能够调用变异方法的，譬如push、pop等。如果要使数组只读，则可以使用 readonly。
let arr7:readonly number[] = []
// Property 'push' does not exist on type 'readonly number[]'
// arr7.push(1)

// readonly array 是 array 的父类型。类型转换，只能是类型缩小，即"父类型 => 子类型"。
// arr1 = arr7
// arr7 = arr1
// arr4 = arr1
// arr1 = arr4

// readonly关键字不能与泛型一起使用
// const arr:readonly Array<number> = [0, 1]

// 为此，typescript提供了专门的泛型写法
let arr8:Readonly<number[]> = []
let arr9:ReadonlyArray<number> = []

// 除了以上方式，只读数组还有一种声明方式，“const断言”
let arr10 = [1, 2] as const

// 多维数组的类型使用 `T[][]` 表达方式
let multi:number[][] = [[1, 2, 3], [4, 5, 6]]
