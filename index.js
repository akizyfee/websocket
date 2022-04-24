const express = require('express')
const SocketServer = require('ws').Server
const PORT = 3000

//用express開 
const server = express()
    .listen(PORT, () => console.log(`伺服器link start~~~  port在${PORT}`))
//再用express開 ws的服務
const wss = new SocketServer({ server })

wss.on('connection', ws => {

    //有人連進來提示
    console.log('有人連進伺服器了')

    //當 WebSocket 的連線關閉時執行
    ws.on('close', () => {
        console.log('伺服器關閉888明天見')
    })
})

wss.on('connection', ws => {

    ws.on('message', data => {
        //客戶傳進來的json物件
        let qq = JSON.parse(data)
        console.log(qq);

        //取得所有連接中的 客戶端
        let clients = wss.clients
        //發送訊息至每個 client
        clients.forEach( (client) => {
            client.send((data))
        })
    })
})
