//public private protected
class Father {
    static fatherName: string = 'fatherName';
    toString() { console.log('Father') }
    public name: string;//public 自己 自己的子类 其他类都能访问
    protected age: number;//protected 自己和自己的子类能访问其它类型不能访问
    private money: number;//private 自己能访问 子类其他类不能访问
    constructor(name: string, age: number, money: number) {
        this.name = name
        this.age = age
        this.money = money
    }
    getName(): string {
        return this.name
    }
    setName(name: string): void {
        this.name = name
    }
}
class Child extends Father {
    static childName: string = 'childName'
    constructor(name: string, age: number, money: number) {
        super(name, age, money)
    }
    toString() {
        super.toString()
        console.log('Child')
    }
    desc() {
        console.log(this.name, this.age);
    }
}
let fater = new Father('李四他爸', 11, 1000)
let child = new Child('李四', 11, 1)
console.log(child.name);
child.toString()
fater.toString()
Child.fatherName;
Child.childName;
// child.age//=>Property 'age' is protected and only accessible within class 'Father' and its subclasses.
//child.money//=>Property 'money' is private and only accessible within class 'Father'.
