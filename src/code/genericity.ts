//泛型

//函数泛型
let Fn: {<T>(arg:T[]): number} = function (arg) { return arg.length }

Fn<string>(['d'])

//接口泛型
interface GenericIdentityFn<T> {
    (arg: T): number;
}

type GenericIdentityFn2<T> = (arg:T)=>number;

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = function(arg) {
    return arg+3
};

myIdentity(2);

//泛型类

class GenericNumber<T> {
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };


//泛型约束

interface leng {
length: number
}
function add<T extends leng>(arg:T):number{
return arg.length
}
add(3);

//声明一个类型参数，它被另一个类型参数所约束
//K约束于T的key值
function getProperty<T,K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); 
getProperty(x, "m");


//在泛型里使用类类型
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag


