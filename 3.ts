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