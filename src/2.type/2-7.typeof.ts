// 在TypeScript中，typeof会返回值或者type类型
// 在类型运算中，typeof会返回类型。
// 在值运算中，typeof会返回值
// https://wangdoc.com/typescript/types#typeof-%E8%BF%90%E7%AE%97%E7%AC%A6

const obj = { x: 3 }

type T0 = typeof obj

let myObj:T0 = {
  x: 4
}

