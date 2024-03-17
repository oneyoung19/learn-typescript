// 在不声明类型时，TypeScript会自动进行类型推断。但有时类型推断的结果 可能并不是正确的。

type T = 'a' | 'b' | 'c'

let foo = 'a'

// 这一行执行会报错，原因是foo的类型推断会是string。而bar的类型是T
// let bar:T = foo

// 因此需要改造成下例 才能正常执行
// let bar:T = foo as T

// 但类型断言并不是能够任意使用的 它需要满足一定条件
// expr as T (expr是T的子类型，或者T是expr的子类型。)
let a = 10

// 譬如这里将数字断言为T 需要先断言为unknown 然后再断言为T
let bar:T = a as unknown as T
