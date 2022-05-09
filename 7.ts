/**
 * 装饰器
 */
export { }
// class Person {
//     say() { }
// }
// function Person() { }
// Object.defineProperty(Person.prototype, 'say', {
//     value: function say() { }
// })

//类装饰器

namespace a {//命名空间
    function addNameEat(x: Function) {
        x.prototype.name = '王五'
        x.prototype.eat = function () {
            console.log(this.name + ' eat');
        }
    }
    @addNameEat
    class Person {
        name: string;
        eat: Function;
        constructor() { }
    }
    let p: Person = new Person()
    console.log(p.name);
    p.eat()
}
//类装饰器工厂
namespace b {//命名空间
    function addNameEatFactory(name: string) {
        return function addNameEat(x: Function) {
            x.prototype.name = name
            x.prototype.eat = function () {
                console.log(this.name + ' eat');
            }
        }
    }
    @addNameEatFactory('jiagou')
    class Person {
        name: string;
        eat: Function;
        constructor() { }
    }
    let p: Person = new Person()
    console.log(p.name);
    p.eat()
}