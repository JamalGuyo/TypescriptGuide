"use strict";
//testing typescript for the first time
// console.log("typescript works!");
//using the strong typing feature
var number = 5;
var age = 23;
var fName = 'jamal';
var friends = ['jamal1', 'jamal2', 'jamal3'];
var descr = [166, 'cm', 54, 'kg'];
var qualified = true;
//using enums feature
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
console.log(color.Red);
// type assertion
var message = 'the sentence tests the length property';
var lengthOfMessage = message.length;
var lengthOfMessage2 = message.length;
//custom types
var drawPoint = function (point) {
    point.x + point.y;
};
drawPoint({
    x: 1,
    y: 2
});
var drawPoint2 = function (point) {
    point.x + point.y;
};
// classes
var PointClass = /** @class */ (function () {
    function PointClass() {
        this.a = 12;
        this.b = 2;
    }
    PointClass.prototype.draw = function () {
        this.a + this.b;
    };
    return PointClass;
}());
// constructors
var PointsClass = /** @class */ (function () {
    function PointsClass(a, b) {
        this.a = a;
        this.b = b;
    }
    PointsClass.prototype.drawPoint = function () {
        this.a + this.b;
    };
    return PointsClass;
}());
// access modifiers
var PointssClass = /** @class */ (function () {
    function PointssClass(x, y) {
        this.x = x;
        this.y = y;
    }
    PointssClass.prototype.drawPoint = function () {
        this.x + this.y;
    };
    return PointssClass;
}());
