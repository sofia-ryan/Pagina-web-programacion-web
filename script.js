function enviarMensaje() {
  alert ('Su mensaje se ha enviado con éxito. ');
}
function cambiarPaginaTestimonios(){
  alert ('Ha entrado a la pagina de Testimonios!')
}
function cambiarPaginaPreguntas(){
  alert ('Encuentre aqui las Preguntas Frecuentes!')
}
function cambiarPaginaDocumentacion(){
  alert ('Encuentre aqui la Documentacion!')
}
function cambiarPaginaHome(){
  alert ('Ha vuelto a la pagina principal.')
}
function cambiarPaginaContacto(){
  alert ('Aqui puede contactarse con nosotros!')
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