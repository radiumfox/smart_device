const accordionButtons = document.querySelectorAll('.accordion__button');
const accordionContent = document.querySelectorAll('.accordion__content');

if(accordionButtons && accordionContent) {
  accordionButtons.forEach(button => {
    button.addEventListener('click', ()=> {
      const id = button.dataset.id;

      accordionContent.forEach(content => {
        if(content.id === id) {
          content.classList.toggle("accordion__content--open");
          button.classList.toggle("accordion__button--open");
        }
      });
    })
  })
}
