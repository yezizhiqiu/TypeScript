// 数据类型


let married: boolean = true;
let age: number = 10;
let first_name: string = 'zf'
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [4, 5, 6]
//元组类型tuple 数量和类型已知的数组
let yuanzu: [string, number] = ['yuanzu', 10];
//普通枚举
enum Gender {
    GIRL,
    BOY
}
console.log(Gender.GIRL);
console.log(Gender.BOY);

console.log(Gender['BOY'], Gender[1]);
console.log(Gender['GIRL'], Gender[0]);
//常量枚举 没有编译
const enum Colors {
    RED, YELLOW, BLUE
}
let myColor = [Colors.RED, Colors.YELLOW, Colors.BLUE]
// 任意类型 any 和js差不多 不进行类型检查
let root: any = document.getElementById('root')
root.style.color = 'red'

let element: HTMLElement | null = document.getElementById('root')
// element.style.color = 'green'
// 非空断言
element!.style.color = 'green'

//null undefined 其他类型的子类型
//strictNullChecks的值为true，则null undefined只能给自己
let x: number;
x = 1;
x = null;
x = undefined;

let y: number | null | undefined;
y = 1;
y = null;
y = undefined;
//strictNullChecks的值为true，则null undefined只能给自己
let z: undefined = undefined
let z2: null = null
let z3: any = null
let z4: any = undefined

//never 代表不会出现的值
//1.作为不会返回的函数的返回值
function error(message: string): never {
    throw new Error('报错了') //直接异常结束
    console.log('ok');

}
function loop(): never {
    while (true) {

    }
    console.log('ok');

}
function fn(x: number | string) {
    if (typeof x === 'number') {
        console.log(x);

    } else if (typeof x === 'string') {
        console.log(x);

    } else {
        console.log(x);//never

    }
}

//void 没有任何类型 
//strictNullChecks=false null赋值void
function greenting(): void {
    // return null;
}

//void 和never区别
// void可被赋值 null undefined ，never不能包含任何类型
// 返回类型为void的函数还能正常执行，但是返回never的函数不能正常执行
//Symbol
let s1 = Symbol('key')
let s2 = Symbol('key')
console.log(s1 === s2);

//BigInt
// const max = Number.MAX_SAFE_INTEGER//2*53-1
// console.log(max + 1 === max + 2);//=>true
const max = BigInt(Number.MAX_SAFE_INTEGER)
// console.log(max + 1 === max + 2)
console.log(max + BigInt(1) === max + BigInt(2))
// console.log(max + 1n === max + 2n);
//js里的类型 Number BigInt ts里的类型 number bigint
let foo: number;
let bar: bigint;
// foo = bar
// bar = foo

//类型推导
let uname;
uname = 1;
uname = "ts"
uname = null;

//uanme=> any

let uname2 = 'ts';
// uname2 = true;

//包装对象wrapper object
// 原始类型 对象类型
//原始类型
let name2 = 'ts'
//如果 内部 自动帮你包装成对象类型
console.log(name2.toUpperCase());
console.log(new String(name2).toUpperCase());

let isOk1: boolean = true;
let isOk2: boolean = Boolean(1)
// let isOk3: boolean = new Boolean(2)

//联合类型
let name3: string | number;
console.log(name3!.toString());//!强制链式调用
name3 = 3;
console.log(name3.toFixed(2));
name3 = 'ts'
console.log(name3!.length);


//类型断言
let name4: string | number;
console.log((name4! as number).toFixed());
console.log((name4! as string).length);
console.log((name4! as any as boolean));//双重断言

//字面量类型 类型字面量
const up: 'Up' = 'Up'
const down: 'Down' = 'Down'
const left: 'Left' = "Left"
const right: 'Right' = 'Right'
type Direction = 'Up' | 'Down' | 'Left' | 'Right'
//可以实现枚举的效果
function move(direction: Direction) {

}
move('Down')

//类型字面量
type Person = {
    name: string,
    age: number
}
let p: Person = {
    name: 'ts',
    age: 23
}

//字符串字面量 联合类型
type T1 = '1' | '2' | '3';
type T2 = string | number | boolean
let t1: T1 = '1'
let t2: T2 = true

