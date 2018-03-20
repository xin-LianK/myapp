var util = require('util');

function Base() {
    this.name = 'Base';
    this.base = 1991;
    this.sayHello = function () {
        console.log("Hello " + this.name);
    };
}

Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);

util.inspect(objBase);//将任意对象转化为字符串
util.inspect(objBase,true);//将任意对象转化为字符串

util.isArray(object); //如果给定的参数 "object" 是一个数组返回true，否则返回false。

util.isRegExp(object);//如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

util.isDate(object);//如果给定的参数 "object" 是一个日期返回true，否则返回false。

util.isError(object);//如果给定的参数 "object" 是一个错误对象返回true，否则返回false。