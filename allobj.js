// __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 
// 如果在模块中，返回的值是模块文件的路径。

// 输出全局变量 __filename 的值
console.log(__filename);

// __dirname 表示当前执行脚本所在的目录。
// 输出全局变量 __dirname 的值
console.log(__dirname);

// setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb) 。：setTimeout() 只执行一次指定函数。

// 返回一个代表定时器的句柄值。

function printHello() {
    console.log("Hello world!");
}
// setTimeout(cb, ms)
setTimeout(printHello, 2000);

// setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb) 。

function printWorld() {
    console.log("God God God!");
}
// 两秒后执行以上函数
var t = setInterval(printWorld, 2000);
clearInterval(t);


// 1	console.log([data][, ...])
// 向标准输出流打印字符并以换行符结束。该方法接收若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。

// 2	console.info([data][, ...])
// 该命令的作用是返回信息性消息，这个命令与console.log差别并不大，除了在chrome中只会输出文字外，其余的会显示一个蓝色的惊叹号。

// 3	console.error([data][, ...])
// 输出错误消息的。控制台在出现错误时会显示是红色的叉子。

// 4	console.warn([data][, ...])
// 输出警告消息。控制台出现有黄色的惊叹号。

// 5	console.dir(obj[, options])
// 用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。

// 6	console.time(label)
// 输出时间，表示计时开始。

// 7	console.timeEnd(label)
// 结束时间，表示计时结束。

// 8	console.trace(message[, ...])
// 当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。

// 9	console.assert(value[, message][, ...])
// 用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。


console.log('Hello world');
console.log('byvoid%diovyb');
console.log('byvoid%diovyb', 1991);

console.log("http://www.runoob.com/nodejs/nodejs-global-object.html");