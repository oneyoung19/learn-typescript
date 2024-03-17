// 在commonJS中，一般都是使用require导入语句 以及module.exports导出语句

// 而在TypeScript的commonJS规范中，使用 `import =` 语句来导入，使用 `export =` 语句来导出。

import fs = require('fs')

const code = fs.readFileSync('hello.ts', 'utf8')

// 使用 `export =` 语句导出：
let obj = { foo: 123 }

export = obj
