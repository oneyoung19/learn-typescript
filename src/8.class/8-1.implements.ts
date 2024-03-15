// 假设使用interface或者type声明了类型，那么class可以结合implements关键字表示类满足类型限制。

// 但interface 只是指定检查条件，如果不满足这些条件就会报错。它并不能代替 class 自身的类型声明。

interface A {
  get(name:string): boolean;
}

class B implements A {
  get(s) { // s 的类型是 any
    return true;
  }
}

// 因此，上述s依然需要手动声明s:string