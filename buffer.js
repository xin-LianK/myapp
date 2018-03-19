const buf = Buffer.from('runoob', 'ascii');


// ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。

// utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF - 8 。

// utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U + 10000 至 U + 10FFFF）。

// ucs2 - utf16le 的别名。

// base64 - Base64 编码。

// latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。

// binary - latin1 的别名。

// hex - 将每个字节编码为两个十六进制字符。

// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));

// -------------Buffer.alloc(size[, fill[, encoding]]) ： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// --------------Buffer.allocUnsafe(size) ： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// --------------Buffer.from(array) ： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);


// --------------Buffer.from(arrayBuffer[, byteOffset[, length]]) ： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。

// --------------Buffer.from(buffer) ： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例

// --------------Buffer.from(string[, encoding]) ： 返回一个被 string 的值初始化的新的 Buffer 实例

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');


// 写入 Node 缓冲区的语法如下所示：
//      buf.write(string[, offset[, length]][, encoding])
//                  string - 写入缓冲区的字符串。
//                         offset - 缓冲区开始写入的索引值，默认为 0 。
//                                  length - 写入的字节数，默认为 buffer.length
//                                              encoding - 使用的编码。默认为 'utf8' 。

buf7 = Buffer.alloc(256);
len = buf.write("www.runoob.com");

console.log("写入字节数 : " + len);

// 读取 Node 缓冲区数据的语法如下所示：
//      buf.toString([encoding[, start[, end]]])
//                   encoding - 使用的编码。默认为 'utf8' 。
//                              start - 指定开始读取的索引位置，默认为 0。
//                                       end - 结束位置，默认为缓冲区的末尾。

buf8 = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
    buf8[i] = i + 97;
}

console.log(buf8.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf8.toString('ascii', 0, 5));   // 输出: abcde
console.log(buf8.toString('utf8', 0, 5));    // 输出: abcde
console.log(buf8.toString(undefined, 0, 5)); // 使用 'utf8' 编码, 并输出: abcde

const buf9 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf9);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);

// Node 缓冲区合并的语法如下所示：
//      Buffer.concat(list[, totalLength])
//                    list - 用于合并的 Buffer 对象数组列表。
//                           totalLength - 指定合并后Buffer对象的总长度。
var buffer1 = Buffer.from(('菜鸟教程'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

// Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：
//      buf.compare(otherBuffer);
//                  otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。

var buffer4 = Buffer.from('ABC');
var buffer5 = Buffer.from('ABCD');
var result = buffer1.compare(buffer5);

if (result < 0) {
    console.log(buffer4 + " 在 " + buffer5 + "之前");
} else if (result == 0) {
    console.log(buffer4 + " 与 " + buffer5 + "相同");
} else {
    console.log(buffer4 + " 在 " + buffer5 + "之后");
}

// Node 缓冲区拷贝语法如下所示：
//      buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
//               targetBuffer - 要拷贝的 Buffer 对象。
//                              targetStart - 数字, 可选, 默认: 0
//                                            sourceStart - 数字, 可选, 默认: 0
//                                                          sourceEnd - 数字, 可选, 默认: buffer.length
var buf10 = Buffer.from('abcdefghijkl');
var buf11 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);

console.log(buf1.toString());

// Node 缓冲区裁剪语法如下所示：
//      buf.slice([start[, end]])
//                  start - 数字, 可选, 默认: 0
//                         end - 数字, 可选, 默认: buffer.length
var buffer6 = Buffer.from('runoob');
// 剪切缓冲区
var buffer7 = buffer6.slice(0, 2);
console.log("buffer7 content: " + buffer7.toString());

// Node 缓冲区长度计算语法如下所示：
//      buf.length;
var buffer8 = Buffer.from('www.runoob.com');
console.log("buffer8 length: " + buffer8.length);