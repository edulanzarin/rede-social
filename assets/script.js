// Obtém o link de notificação e a seção de notificação
const notificationLink = document.getElementById('heart');
const notificationSection = document.getElementById('notification');
const navSection = document.getElementById('nav');
const titSection = document.querySelectorAll('.tit');

// Adiciona um evento de clique ao link de notificação
notificationLink.addEventListener('click', (event) => {

  if (notificationSection.classList.contains('show-notification')) {
    notificationSection.classList.remove('show-notification');
    notificationSection.classList.add('hide-notification');
    navSection.classList.add('nav');
    navSection.classList.remove('nav-curt');
    titSection.forEach(element => {
      element.classList.add('tit');
      element.classList.remove('tit-curt');
    })
  } else {
    // Caso contrário, adiciona a classe para exibi-la
    notificationSection.classList.remove('hide-notification');
    notificationSection.classList.add('show-notification');
    navSection.classList.add('nav-curt');
    navSection.classList.remove('nav');
    titSection.forEach(element => {
      element.classList.add('tit-curt');
      element.classList.remove('tit');
    })
    
  }
});
