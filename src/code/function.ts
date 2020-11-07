 
//函数
let addFn: (x:number,y:number) => number = function(x:number,y:number):number { return x+y }

//类型推断
let addFn2: (x:number,y:number) => number = function(x,y) { return x+y }

addFn2(2,3);

//可选
let addFn3: (x:number,y?:number) => number = function(x,y) { return x+y }

addFn3(3)


//默认参数
let addFn4 = function(x:number,y=3) { return x+y }

addFn4(3,3)

//剩余参数
let joinFn = function(x:string,...arg:string[]) { return x+ arg.join(',') }
joinFn('a','b','c','d')

 //重载
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x:any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

//返回值推断
function parse(a:string) {
    return {
        split: function(str:string){
            return str.split(',')
        }
    }
}

type type5 = ReturnType<typeof parse>;