// 泛型 这个词不好理解。其实把它称作“类型参数” 更加清晰易懂。

// 譬如，如果没有类型参数，那么

function getNum(arr: number[]):number {
  return arr[0]
}

// 但这样number其实书写了两次，而且函数入参和返回值之间的关联性不是很明显（虽然能看出来都是number）

// 为了更加形象化的表示，TypeScript引入了泛型的概念

function getMyNum<T>(arr: T[]):T {
  return arr[0]
}

// 这样我们把number抽离了出来 以T来命名

// 在实际调用时，要将T显式传递进去。譬如作为number

getMyNum<number>([1, 2, 3])

// 如果类型参数，没有显式定义，那么TypeScript会自动推断

getMyNum(['1', '2', '3'])

// 但自动推断 也有一定限制。假设数组里同时存在number和string 就会报错

function getArr<T>(arr1: T[], arr2: T[]):T[] {
  return arr1.concat(arr2)
}

// getArr([1, 2], ['1', '2'])

// 上例中，由于T最终既可能是number又可能是string，因此执行结果就报错了。为了解决这种情况，我们需要使用联合类型：

getArr<number|string>([1, 2], ['1', '2'])

// 另外，在实际业务中，有可能不止需要定义仅仅一个类型参数。多个类型参数，可以使用T、U、V...等等来进行定义：

function map<T, U>(
  arr:T[],
  f:(arg:T) => U
):U[] {
  return arr.map(f)
}

// 用法实例
map<string, number>(
  ['1', '2', '3'],
  (n) => parseInt(n)
) // 返回 [1, 2, 3]
