var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//public private protected
var Father = /** @class */ (function () {
    function Father(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Father.prototype.toString = function () { console.log('Father'); };
    Father.prototype.getName = function () {
        return this.name;
    };
    Father.prototype.setName = function (name) {
        this.name = name;
    };
    Father.fatherName = 'fatherName';
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age, money) {
        return _super.call(this, name, age, money) || this;
    }
    Child.prototype.toString = function () {
        _super.prototype.toString.call(this);
        console.log('Child');
    };
    Child.prototype.desc = function () {
        console.log(this.name, this.age);
    };
    Child.childName = 'childName';
    return Child;
}(Father));
var fater = new Father('李四他爸', 11, 1000);
var child = new Child('李四', 11, 1);
console.log(child.name);
child.toString();
fater.toString();
Child.fatherName;
Child.childName;
// child.age//=>Property 'age' is protected and only accessible within class 'Father' and its subclasses.
//child.money//=>Property 'money' is private and only accessible within class 'Father'.
