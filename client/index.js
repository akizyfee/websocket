//使用 WebSocket 的網址向 Server 開啟連結
let ws = new WebSocket('ws://localhost:3000')
//指定接收的2進要是arraybuffer
ws.binaryType = "arraybuffer";

//要傳送給伺服器端的json
function sendText() {
    var msg = {
        name: "Gleam Eyes",
        skill: "c8763",
        content: "對的你被星爆了"
    };
    ws.send(JSON.stringify(msg));
}

//客戶端的開啟提醒
ws.onopen = () => {
    console.log('link start~~~')
}

//客戶端的關閉提醒
ws.onclose = () => {
    console.log('close connection')
}
//接收 Server 發來的訊息 轉jason
ws.onmessage = function(e) {
    console.log(e);
    let enc = new TextDecoder("utf-8")
    let uint8Msg = new Uint8Array(e.data)
    let data = enc.decode(uint8Msg)
    let qq = JSON.parse(data)
    console.log(qq);
  };