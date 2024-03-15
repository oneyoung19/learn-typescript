// interface可以重复声明 同名interface会自动合并

interface A {
  x: number
}

interface A {
  y: number
}

const obj:A = {
  x: 1,
  y: 2
}
