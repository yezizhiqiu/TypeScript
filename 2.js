function hello(name) {
    console.log('hello', name);
}
hello('ts');
var getName = function (firstName, lastName) {
    return firstName + lastName;
};
function print1(name, age) {
    console.log(name, age);
}
print1('ts', 1);
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('/');
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (val, item) { return val + item; }, 0);
}
console.log(sum(1, 2, 3));
//函数的重载
var obj = {};
function attr(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else if (typeof val === 'number') {
        obj.age = val;
    }
}
attr('ts');
attr(10);
function attr2(a, b) {
}
attr2('ts', '2');
attr2(1, 2);
//attr2('s', 1)
//非常有名案例 compose
