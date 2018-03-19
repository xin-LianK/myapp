var http = require("http"); //第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。

http.createServer(function (req, res) {

  // 发送 Http 头部
  // Http 状态值：200：OK
  // 内容类型：text/plain
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  // 发送响应数据 “Hello World”
  res.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');