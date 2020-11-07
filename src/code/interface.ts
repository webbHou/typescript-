
interface boxValue {
    readonly length: number
    width: number;
    height: number;
    color?: string;
}

function box(parameter: boxValue){
    // parameter.length = 2;
    let newbox = { volume: 10, color: 'red' };
    if(parameter.color) {
        newbox.color = parameter.color;
    }
    newbox.volume = parameter.width * parameter.length * parameter.height;
    return newbox;
}
let myObj = { length: 5, height: 3, width: 4, dd:2  };
//对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候
box(myObj)
box({ length: 5, height: 3, width: 4, dd:2 })

//函数
interface SearchFunc {
    (source: string, subString: string): boolean;
}

//可索引
interface IArr {
    readonly [props:number]:string
}
let arr:IArr = ['a','b'];

arr[0] = 'dd'; //readonly

let s = arr[0];

//[a:string]:string 定义索引的类型number|string和返回值类型


interface IFn {
    (width:number):number
}

let fn6:IFn = function(width:number) {
    return width
}


interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!

interface Shape {
    color?: string
}

interface IBox extends Shape {
    width: string;
    height: string;
}

let boxs:IBox = {
    width: '2',
    height: '2',
}


