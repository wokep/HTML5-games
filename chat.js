const messages = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
        const newMessage = document.createElement('li');
        newMessage.textContent = messageText;
        messages.appendChild(newMessage);
        messageInput.value = '';
        messages.scrollTop = messages.scrollHeight; // Auto-scroll to the bottom
    }
});
