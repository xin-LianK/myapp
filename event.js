// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。
// on 函数用于绑定事件函数，emit 属性用于触发一个事件。

// eventEmitter.on('some_event', function () {
//     console.log('some_event 事件触发');
// });

// setTimeout(() => {
//     eventEmitter.emit('some_event');
// }, 1000);

eventEmitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1', arg1, arg2);
});

eventEmitter.on('someEvent', function (arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

// 为指定事件添加一个监听器到监听器数组的尾部。
eventEmitter.addListener('someEvent', function () {
    console.log('listener3');
});

// 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
eventEmitter.once('someEvent', function () {
    console.log('listener4');
});

// 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
// 第一个是事件名称，第二个是回调函数名称。
// eventEmitter.removeListener(event, listener);

// 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
// eventEmitter.removeAllListeners([event]);

// 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
eventEmitter.setMaxListeners(5);

// 返回指定事件的监听器数组。
eventEmitter.listeners('someEvent');

// 按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
// eventEmitter.emit(event, [arg1], [arg2], [...]);

// 返回指定事件的监听器数量。
// eventEmitter.listenerCount(emitter, event);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'someEvent');
console.log(eventListeners + " 个监听器监听连接事件。");

// newListener
//      event - 字符串，事件名称
//      listener - 处理事件函数
// 该事件在添加新监听器时被触发。

// removeListener
//      event - 字符串，事件名称
//      listener - 处理事件函数

// 从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。

var error = function error() {
    console.log("This is a error");
};

// eventEmitter.on('error', error);
// eventEmitter.addListener('error', error);
eventEmitter.emit('someEvent', 'what', 'fuck');

// emitter.emit('error');
