// 1.几乎所有的interface类型 都能改写成type类型

// 2.type能够表示非对象类型，而interface只能表示对象类型（包括数组、函数等）。

// 3.interface可以继承其他类型，type不支持继承。

// 4.同名interface会自动合并，同名type则会报错。也就是说，TypeScript 不允许使用type多次定义同一个类型。

// 5.interface不能包含属性映射（mapping），type可以。

// 6.this关键字只能用于interface。

// 7.type 可以扩展原始数据类型，interface 不行。

// 正确
type MyStr = string & {
  type: 'new'
};

// 报错
interface MyStr extends string {
  type: 'new'
}

// 8.interface无法表达某些复杂类型（比如交叉类型和联合类型），但是type可以。

// 综上所述，如果有复杂的类型运算，那么没有其他选择只能使用type；一般情况下，interface灵活性比较高，便于扩充类型或自动合并，建议优先使用。
