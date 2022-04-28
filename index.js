/*
 * @Descripttion: 
 * @Author: 小余
 * @Date: 2022-04-28 15:37:47
 * @LastEditors: voanit
 * @LastEditTime: 2022-04-28 17:53:44
 */
var ws = require("nodejs-websocket");

const PORT = "3001";

var server = ws.createServer((conn) => {
  console.log("连接成功");

  conn.on("error", (event) => {
    console.log('WebSocket error: ', event);
  })
  conn.on("close", () => {
    console.log("客户端连接关闭")
  })
  conn.on("text", (data) => {
    if (data === "ping") {
      conn.send(JSON.stringify({ message: "心跳检测正常", type: "pong" }));
    } else {
      conn.send(JSON.stringify({ message: `获取到消息，已接收消息：${data}，返回客户端消息：你的酒馆对我打了烊！`, type: "send" }));
    }

  })
})

server.listen(PORT, () => {
  console.log('服务启动成功，监听了端口:' + PORT)
})