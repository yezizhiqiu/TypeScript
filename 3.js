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
