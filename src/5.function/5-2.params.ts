// 函数实际参数可以比类型定义的少
type GetA = (a:string, b:string) => string

const getA:GetA = a => a

// 如果要显式的声明某参数是可选的。可以用?表示参数是可选的，可以是string或者undefined
type GetB = (a:string, b?:string) => string

const getB:GetB = a => a

// 但可选参数必须位于末尾。A required parameter cannot follow an optional parameter.
// type GetC = (a?:string, b?:string, c:string) => string

// 如果真需要上述场景的话，可以显式将参数声明为undefined
type GetD = (a:string|undefined, b:string|undefined, c:string) => string

