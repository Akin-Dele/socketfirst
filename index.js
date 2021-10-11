const express = require('express');
const socket = require('socket.io');

//Setting up App
const app = express();

const server = app.listen(3000, () => {
    console.log('Listening to what you have to say');
})

app.use(express.static('public'));

//Set Up socket
const io = socket(server);

io.on('connection', (socket) => {
    socket.on('chat', data => {
        io.sockets.emit('chat', data);
    })
});