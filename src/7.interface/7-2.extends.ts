// 1.interface继承interface

interface A {
  x: number,
  // 继承时，不能出现冲突类型
  // y: number
}

interface B {
  y: string
}

interface C extends A,B {
  z: number
}

// 2.interface继承type

// 当type定义的是一个对象时，那么interface也能继承该type类型
type Country = {
  x: number,
  y: number
}

interface NewCountry extends Country {
  z: string
}

// 3.interface继承class

// 其实class也是一个对象 所以interface也能继承class

class X {
  x: string = 'x'

  constructor (x: string) {
    this.x = x
    this.init()
  }

  init () {
    console.log(this.x)
  }
}

interface Y extends X {
  y: string
}
