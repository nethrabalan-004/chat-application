const {Socket} =require("dgram")
const express = require("express")
const app = express()
const path=require("path")

const http = require("http")
const server=http.createServer(app)
const {Server}=require("socket.io")
const io=new Server(server)


io.on("connection",(socket)=>{
    socket.on("user", (msg) => {
        
        socket.broadcast.emit("sender", msg);
    });
})




app.use(express.static(path.resolve('./public')))
app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html')
})

server.listen(5000,()=>{
    console.log('Server is running on port 5000')
})