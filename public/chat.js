// Make Connection
const socket = io.connect('http://localhost:3000');

// Query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

//Add Event Listener
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    btn.innerHTML = null;
})

//Feedback - is typing
message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
})

//listen for events
socket.on('chat', data => {
 //   feedback.innerHTML = '';
    output.innerHTML += `<p><strong>${data.handle}: </strong><em>${data.message}</em></p>`;
});

//listen is Typing
socket.on('typing', data => {
    feedback.innerHTML = `<p><strong>${data} </strong><em>is typing a message ...</em></p>`;
});