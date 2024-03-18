// [module].[description].d.ts

import { sayHello } from './module'
import type { SayHello } from './module.d'

// console.log(SayHello)
// sayHello: SayHello('hello')
sayHello('Hello')
