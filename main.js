/* Abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => nav.classList.toggle('show'));
}

/*Quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')
for (const link of links){
  link.addEventListener('click', () => nav.classList.remove('show'))
}

/* Botão voltar para o topo*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if(window.scrollY >= 260) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', backToTop)

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}