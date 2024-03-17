// TypeScript中的模块化 不仅可以导入、导出变量 也可以导入、导出type类型

export const a = 'a'

export type A = 'A'

// 当导入的时候有两种方式导入类型：

import { type A, a } from './a.ts'

import type { A } from './a.ts'
