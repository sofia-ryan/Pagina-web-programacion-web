function enviarMensaje() {
  alert ('Su mensaje se ha enviado con éxito. ');
}

(function(){
  const titleQuestions = [...document.querySelectorAll('.questions__title')];
  console.log(titleQuestions)

  titleQuestions.forEach(question =>{
      question.addEventListener('click', ()=>{
          let height = 0;
          let answer = question.nextElementSibling;
          let addPadding = question.parentElement.parentElement;

          addPadding.classList.toggle('questions__padding--add');
          question.children[0].classList.toggle('questions__arrow--rotate');

          if(answer.clientHeight === 0){
              height = answer.scrollHeight;
          }

          answer.style.height = `${height}px`;
      });
  });
})();

const openButtons = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal__close');

openButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modalIndex = button.getAttribute('data-modal');
    modals[modalIndex].classList.add('modal--show');
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = button.closest('.modal');
    modal.classList.remove('modal--show');
  });
});