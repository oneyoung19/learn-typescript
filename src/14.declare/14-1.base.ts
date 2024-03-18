/*
declare关键字 用来描述类型，可使用于以下：
1. 变量（const let var）
2. type或者interface
3. class
4. enum
5. function
6. module
7. namespace

主要用来描述引入的第三方库或者全局库的未知类型
*/

// declare let x: number
// x = 1

// declare var $: any
// $('#myElement').addClass('highlight')

declare var document: any;
document.title = 'Hello'
