const http = require('http')
const url = require('url')

let callback = function(req, resp){
    resp.writeHead(200, {
        "Content-type": "text/plain; charset=utf-8"
    })

    let parts = url.parse(req.url)

    if(parts.path == '/'){
        resp.end("Flavin crackudo")
    } else if (parts.path == "/rota1"){
        resp.end("rota1")
    } else if(parts.path == '/rota2'){
        resp.end("Sei lá")
    }
}

var server = http.createServer(callback)

server.listen(8080)

console.log("Initiated at port 8080");