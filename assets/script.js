// Obtém o link de notificação e a seção de notificação
const notificationLink = document.getElementById('heart');
const notificationSection = document.getElementById('notification');

// Adiciona um evento de clique ao link de notificação
notificationLink.addEventListener('click', (event) => {
  event.preventDefault(); // Impede que o link redirecione para outra página

  // Alterna a visibilidade da seção de notificação
  notificationSection.classList.toggle('show-notification');
});
