// 如果没有声明类型 那么let语句的类型会被推断为基本类型 const语句的类型会被推断为值类型

// 类型推断为string
let a = 'hello'

// 类型推断为'hello'
const b = 'hello'

// 1.as const的必要性
let lang = 'javascript'
type Lang = 'javascript' | 'java'

function setLang(lang: Lang):string {
  return lang
}

// 调用时报错 const lang = 'javascript' 或者 let lang = 'javascript' as const
// setLang(lang)


// 2.as const 的使用是有限的
// A 'const' assertions can only be applied to references to enum members, or string, number, boolean, array, or object literals.
// let c = a as const
