type Ibox1 = {
    width: number;
    age: number;
};

type Ibox2 = Ibox1 & {
    height: number
} 

interface Ibox3 {
    width: number;
}

interface Ibox4 extends Ibox3 {
    height: number
}

interface Ibox5 extends Ibox1 {
    height: number
}

type Ibox6 = Ibox3 & {
    height: number
} 

type Ibox7 = Ibox3 | {
    height: number
} 

let Box:Ibox6 = {
    height: 2,
    width: 3
}

class Box2 implements Ibox5 {
    age = 2;
    width = 2;
    height = 3;
}

class Box3 implements Ibox7 {
    width = 2;
    height = 6;
}

type type<A, B> = A extends B ? A: A & B;

//类型判断
let num:type<Ibox5, Ibox1> = {
    age: 2,
    width: 2,
    height: 3
};


//工具泛型
//剔除
type type2<A, B> = A extends B ? never : A;
//包含
type type3<A, B> = A extends B ? never : A;


type type4 = type2<'a'|'b'|'c','a'>;


interface IFN {
    (name:string):boolean;
    age: number
}
type IFN2 = {
    (name:string):boolean;
    age: number
}

const Fn2:IFN = function(name:string) {
    return name.indexOf('aa')>-1
}

let ll = Fn2('s');

Fn2.age = 2;


interface IQZQD{
    [index:string]:number
}

let b:IQZQD = {
    cnName: 'w',
    age: 2,
    author: 'webb'
}

//会遍历属性
type ant = keyof IQZQD;