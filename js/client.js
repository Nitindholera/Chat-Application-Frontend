// const socket = io('http://localhost:8000');
const socket = io('https://mechat-y5zu.onrender.com');


const form = document.getElementById("send-container");

const messageInput = document.getElementById("messageINP");

const messageContainer = document.querySelector(".container");

const name = prompt("Name?: ", );

socket.emit('new-user-joined', name);

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

socket.on('user-joined', data=>{
    append(`${data} joined the chat`, 'left')
})

socket.on('receive', data=>{
    append(`${data.name}: ${data.message}`, 'left')
})

socket.on('leave', data=>{
    append(`${data} left the chat`, 'left`')
})

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageInput.value = ""
})
