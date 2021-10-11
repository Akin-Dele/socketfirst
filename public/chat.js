// Make Connection
const socket = io.connect('http://localhost:3000');

// Query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');

//Add Event Listener
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
})

//Feedback - is typing
message.addEventListener

//listen for events
socket.on('chat', data => {
    output.innerHTML += `<p><strong>${data.handle}: </strong><em>${data.message}</em></p>`;
})