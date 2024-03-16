// enum枚举类型是TypeScript对于JavaScript的一种拓展
enum Color {
  red,
  yellow,
  blue
}

console.log(Color.red)

// 如果没有定义value的话，那么枚举值会从0依次递增

// 我们也可以定义enum的具体值，它可以是数值，也可以是字符串

enum MyEnum {
  name = 'Tom',
  age = 19
}

// 同名enum会自动合并
