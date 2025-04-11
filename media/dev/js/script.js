const form = document.getElementById('form');
const input = document.getElementById('input');
const chat = document.getElementById('chat');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (userMessage === '') return;

  appendMessage('user', userMessage);
  input.value = '';
  scrollToBottom();

  simulateTyping(() => {
    const botReply = generateBotReply(userMessage);
    appendMessage('bot', botReply);
    scrollToBottom();
  });
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chat.appendChild(msg);
}

function simulateTyping(callback) {
  const typingMsg = document.createElement('div');
  typingMsg.classList.add('message', 'bot', 'typing');
  typingMsg.textContent = 'ChatGPT sta scrivendo...';
  chat.appendChild(typingMsg);
  scrollToBottom();

  setTimeout(() => {
    typingMsg.remove();
    callback();
  }, 1000 + Math.random() * 1000); // tempo finto
}

function generateBotReply(userText) {
  return "Hai scritto: " + userText;
}

function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
}
