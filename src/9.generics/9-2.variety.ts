// https://wangdoc.com/typescript/generics#%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D%E7%9A%84%E6%B3%9B%E5%9E%8B%E5%86%99%E6%B3%95
// 1.函数的泛型写法

function getA<T> (a: T): T {
  return a
}

// TODO: 函数表达式的泛型如何定义
// const getA<T> = (a:T): T => a

// 2.接口的泛型写法

interface Content<T> {
  content: T
}

const content:Content<string> = {
  content: 'Hello'
}

// 3.类的泛型写法

class Pair<K, V> {
  // key: K;
  // value: V;
}

// 4.type类型别名的泛型写法
type Nullable<T> = T | undefined | null

