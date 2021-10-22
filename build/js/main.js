const introButton = document.querySelector('.intro__button');

if (introButton) {
  if(window.innerWidth < 750) {
    introButton.textContent = 'Бесплатная консультация'
  }
}
