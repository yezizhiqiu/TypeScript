// 数据类型
var married = true;
var age = 10;
var first_name = 'zf';
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
//元组类型tuple 数量和类型已知的数组
var yuanzu = ['yuanzu', 10];
//普通枚举
var Gender;
(function (Gender) {
    Gender[Gender["GIRL"] = 0] = "GIRL";
    Gender[Gender["BOY"] = 1] = "BOY";
})(Gender || (Gender = {}));
console.log(Gender.GIRL);
console.log(Gender.BOY);
console.log(Gender['BOY'], Gender[1]);
console.log(Gender['GIRL'], Gender[0]);
var myColor = [0 /* RED */, 1 /* YELLOW */, 2 /* BLUE */];
// 任意类型 any 和js差不多 不进行类型检查
var root = document.getElementById('root');
root.style.color = 'red';
var element = document.getElementById('root');
// element.style.color = 'green'
// 非空断言
element.style.color = 'green';
//null undefined 其他类型的子类型
//strictNullChecks的值为true，则null undefined只能给自己
var x;
x = 1;
x = null;
x = undefined;
var y;
y = 1;
y = null;
y = undefined;
//strictNullChecks的值为true，则null undefined只能给自己
var z = undefined;
var z2 = null;
var z3 = null;
var z4 = undefined;
//never 代表不会出现的值
//1.作为不会返回的函数的返回值
function error(message) {
    throw new Error('报错了'); //直接异常结束
    console.log('ok');
}
function loop() {
    while (true) {
    }
    console.log('ok');
}
function fn(x) {
    if (typeof x === 'number') {
        console.log(x);
    }
    else if (typeof x === 'string') {
        console.log(x);
    }
    else {
        console.log(x); //never
    }
}
//void 没有任何类型 
//strictNullChecks=false null赋值void
function greenting() {
    // return null;
}
//void 和never区别
// void可被赋值 null undefined ，never不能包含任何类型
// 返回类型为void的函数还能正常执行，但是返回never的函数不能正常执行
//Symbol
var s1 = Symbol('key');
var s2 = Symbol('key');
console.log(s1 === s2);
//BigInt
// const max = Number.MAX_SAFE_INTEGER//2*53-1
// console.log(max + 1 === max + 2);//=>true
var max = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(max + 1 === max + 2)
console.log(max + BigInt(1) === max + BigInt(2));
// console.log(max + 1n === max + 2n);
//js里的类型 Number BigInt ts里的类型 number bigint
var foo;
var bar;
// foo = bar
// bar = foo
//类型推导
var uname;
uname = 1;
uname = "ts";
uname = null;
//uanme=> any
var uname2 = 'ts';
// uname2 = true;
//包装对象wrapper object
// 原始类型 对象类型
//原始类型
var name2 = 'ts';
//如果 内部 自动帮你包装成对象类型
console.log(name2.toUpperCase());
console.log(new String(name2).toUpperCase());
var isOk1 = true;
var isOk2 = Boolean(1);
// let isOk3: boolean = new Boolean(2)
//联合类型
var name3;
console.log(name3.toString()); //!强制链式调用
name3 = 3;
console.log(name3.toFixed(2));
name3 = 'ts';
console.log(name3.length);
//类型断言
var name4;
console.log(name4.toFixed());
console.log(name4.length);
console.log(name4); //双重断言
//字面量类型 类型字面量
var up = 'Up';
var down = 'Down';
var left = "Left";
var right = 'Right';
//可以实现枚举的效果
function move(direction) {
}
move('Down');
var p = {
    name: 'ts',
    age: 23
};
var t1 = '1';
var t2 = true;
