// Obtém o link de notificação e a seção de notificação
const notificationLink = document.getElementById('heart');
const notificationSection = document.getElementById('notification');

// Adiciona um evento de clique ao link de notificação
notificationLink.addEventListener('click', (event) => {

  if (notificationSection.classList.contains('show-notification')) {
    notificationSection.classList.remove('show-notification');
    notificationSection.classList.add('hide-notification');
  } else {
    // Caso contrário, adiciona a classe para exibi-la
    notificationSection.classList.remove('hide-notification');
    notificationSection.classList.add('show-notification');
  }
});
