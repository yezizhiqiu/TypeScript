"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 所有ts文件中类 都是全局 除了有export 表示私有
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'ts';
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
var p1 = new Person();
p1.name = 'ts1';
p1.getName();
//定义存取器
var User = /** @class */ (function () {
    //myName: string;
    function User(myName) {
        this.myName = myName;
        //this.myName = myName
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this.myName;
        },
        set: function (value) {
            this.myName = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User('test1');
user.name = 'jiagou';
console.log(user.name);
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.changeName = function (name) {
        //this.name = name //=>Cannot assign to 'name' because it is a read-only property.
    };
    return Animal;
}());
