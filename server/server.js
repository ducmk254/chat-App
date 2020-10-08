const express = require('express')
let  app = express()
let   path = require('path')
let    pathPublic = path.join(__dirname,"../public")
let      port = process.env.PORT || 3000
      
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(pathPublic));


app.get('/',(req,res)=>{
    res.sendFile('index.html');
})

io.on('connection',(socket)=>{
    console.log('A new user just connected');

    socket.on('disconnect',()=>{
        console.log('User disconnected')
    })
    
})


http.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})