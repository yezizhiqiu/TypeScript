// 继承
export { }
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name
    }
}
class Student extends Person {
    stuNo: number;
    constructor(name: string, age: number, stuNo: number) {
        super(name, age)
        this.stuNo = stuNo
    }
    getStuNo(): number {
        return this.stuNo
    }
}
let s1 = new Student('张三', 11, 1)
console.log(s1.getStuNo());
