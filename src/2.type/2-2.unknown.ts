// unknown跟any的相似之处，在于所有类型的值都可以分配给unknown类型。

let y:unknown

y = 1

y = 'Hello world'

y = true

// unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）。
let v:unknown = 123

let v1:boolean = v // 报错
let v2:number = v // 报错

// 不能直接调用unknown类型变量的方法和属性
let v1:unknown = { foo: 123 }
v1.foo  // 报错

let v2:unknown = 'hello'
v2.trim() // 报错

let v3:unknown = (n = 0) => n + 1
v3() // 报错

// unknown类型变量能够进行的运算是有限的，只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错。
let a:unknown = 1;

a + 1 // 报错
a === 1 // 正确
