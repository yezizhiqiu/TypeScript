"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (Child, Father) {//把Father身上的静态属性都拷贝到Child身上
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (Child, Father) { Child.__proto__ = Father; }) ||
            function (Child, Father) { for (var p in Father) if (Object.prototype.hasOwnProperty.call(Father, p)) Child[p] = Father[p]; };
        return extendStatics(Child, Father);
    };
    return function (Child, Father) {
        if (typeof Father !== "function" && Father !== null)
            throw new TypeError("Class extends value " + String(Father) + " is not a constructor or null");
        extendStatics(Child, Father);
        function __() { this.constructor = Child; }
        //原型继承
        Child.prototype = Father === null ? Object.create(Father) : (__.prototype = Father.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Father = /** @class */ (function () {
    function Father() {
    }
    return Father;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Father));
