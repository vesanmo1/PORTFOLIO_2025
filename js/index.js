/**********************************************************
 * MOVIMIENTO DEL INDICADOR "TOGGLE" EN EL HEADER__NAV   *
 **********************************************************/

// Este código permite que al hacer clic en un elemento del menú de navegación, el indicador se desplace. 
// === [USO DE CHATGPT] === Se ha utilizado ChatGPT para la última parte (el movimiento del indicador)

const navItems = document.querySelectorAll('.header-nav__item');
  const indicator = document.querySelector('.header-nav__indicator');

  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Quita la clase 'active' de todos
      navItems.forEach(i => i.classList.remove('active'));
      // Añade la clase 'active' al clicado
      item.classList.add('active');
      // Mueve el indicador
      const percent = (100 / navItems.length) * index;
      indicator.style.left = `calc(${percent}% + 0.5rem)`;
    });
  });
