function hello(name: string): void {
    console.log('hello', name);
}

hello('ts')

type GetName = (firstName: string, lastName: string) => string;
let getName: GetName = function (firstName: string, lastName: string): string {
    return firstName + lastName
}
function print1(name: string, age?: number): void {
    console.log(name, age);
}
print1('ts', 1)

function ajax(url: string, method: string = 'GET') {
    console.log(url, method);
}
ajax('/')
function sum(...numbers: number[]) {
    return numbers.reduce((val, item) => val + item, 0)
}
console.log(sum(1, 2, 3));

//函数的重载

let obj: any = {};
/**
 * 
 * @param val 
 */
function attr(val: number): void
function attr(val: string): void
function attr(val: any): void {
    if (typeof val === 'string') {
        obj.name = val
    } else if (typeof val === 'number') {
        obj.age = val
    }
}
attr('ts')
attr(10)
//attr(true)
function attr2(a: string, b: string): void
function attr2(a: number, b: number): void
function attr2(a: string | number, b: string | number): void {
}
attr2('ts', '2')
attr2(1, 2)
//attr2('s', 1)

//非常有名案例 compose


