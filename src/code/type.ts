//交叉类型
type a = {
    name: string
};
type b = {
    age: number
};

let info: a & b = {
    name:'webb',
    age: 2
}


//类型兼容性
interface Named {
    name: string;
}

let person1: Named;
// y's inferred type is { name: string; location: string; }
let person2 = { name: 'Alice', location: 'Seattle' };
person1 = person2;


//联合类型
let a: string | null = '333';
a = null; //ok
a = false; //error


interface Bird {
    fly():void;
    layEggs():void;
}

interface Fish {
    swim():void;
    layEggs():void;
}

function getSmallPet(): Fish | Bird {
    let result = {
        swim: () => {},
        layEggs: () => {}
    };
    return result;
}

let pet = getSmallPet();

// 每一个成员访问都会报错
if (<Fish>pet) {
    (<Fish>pet).swim();
}else {
    (<Bird>pet).fly();
}

//去除null
// 类型保护
function f(sn: string | null): string {
    return sn || "default";
}

//可选参数默认为undefined
function fn(x: number, y?: number) {
    return x + (y || 0);
}
fn(2)

// 类型断言!
type IObj = {
    a: string;
    b?: string[]
}
let obj:IObj = {
    a:'dd',
    // b:[]
}

//类型推论
window.onmousedown = function(mouseEvent:Event) {
    console.log(mouseEvent.bubbles);  //<- Now, no error is given
};

obj.b!.join('.');

function broken(name: string | null): string {
    function postfix(epithet: string) {
      return name!.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    // name = name || "Bob";
    return postfix("great");
}

//数字字面量类型
function foo(x: number):1 | 2 | 3{
    if (x === 1 || x !== 2) {
        return 2
        //         ~~~~~~~
        // Operator '!==' cannot be applied to types '1' and '2'.
    }
    return 1
}

//可辨识联合
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

interface Triangle {
    kind: 'triangle';
    width: number;
    height: number;
}

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

type Shape2 = Square | Rectangle | Circle | Triangle;
function area(s: Shape2):number {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default: return assertNever(s);
    }
    // should error here - we didn't handle case "triangle"
}
area(
    {
        kind: 'triangle',
        width: 2,
        height: 3
    }
)

//类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
type Container<T> = { value: T };

//多态this
class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}
class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
      this.value = Math.sin(this.value);
      return this;
    }
}
let v = new ScientificCalculator(2).multiply(2).sin().add(2).currentValue();


//索引类型

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]

interface NumberDictionary {
    [index: string]: number;
    length: number;    // 可以，length是number类型
    name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
  }
  


//映射类型

interface IPs {
    name?: string;
}

type Readonlytype<T> = {
    readonly [P in keyof T]: T[P];
}
type Partialtype<T> = {
    [P in keyof T]-?: T[P];  //将可选改为必选
}


let b3:Partialtype<IPs> = {
    name: '22'
}

type PersonPartial = Partial<Person>;
type ReadonlyPerson = Readonly<Person>;

type IP<T> = { [P in keyof T]: T[P] }; //索引类型查询操作符keyof
// 选出k属性的值
type IP2<T, K extends keyof T> = { [P in K]: T[P] }; //索引类型查询操作符keyof

interface o {
    name: string;
    age: number
}

interface o2 {
    name: string;
}

let fn5:IP2<o, keyof o2> = {
    name: '2',
    // age: 2
}

function fn3<T>(a:IP<T>):T {
    let result = {} as T;
    for(let key in a){  //for in迭代
        result[key] = a[key];
    }
    return result;
}
