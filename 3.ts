export { }
// 所有ts文件中类 都是全局 除了有export 表示私有
class Person {
    name: string = 'ts'
    getName(): void {
        console.log(this.name);

    }
}

let p1 = new Person();
p1.name = 'ts1'
p1.getName()

//定义存取器
class User {
    //myName: string;
    constructor(public myName: string) {
        //this.myName = myName
    }
    get name() {
        return this.myName
    }
    set name(value) {
        this.myName = value
    }
}
let user = new User('test1')
user.name = 'jiagou'
console.log(user.name);

class Animal {
    public readonly name: string;
    constructor(name: string) {
        this.name = name
    }
    changeName(name: string) {
        //this.name = name //=>Cannot assign to 'name' because it is a read-only property.
    }
}

