"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// class Person {
//     say() { }
// }
// function Person() { }
// Object.defineProperty(Person.prototype, 'say', {
//     value: function say() { }
// })
//类装饰器
var a;
(function (a) {
    function addNameEat(x) {
        x.prototype.name = '王五';
        x.prototype.eat = function () {
            console.log(this.name + ' eat');
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            addNameEat
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.name);
    p.eat();
})(a || (a = {}));
//类装饰器工厂
var b;
(function (b) {
    function addNameEatFactory(name) {
        return function addNameEat(x) {
            x.prototype.name = name;
            x.prototype.eat = function () {
                console.log(this.name + ' eat');
            };
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            addNameEatFactory('jiagou')
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.name);
    p.eat();
})(b || (b = {}));
