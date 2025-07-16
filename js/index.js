/**********************************************************
 * MOVIMIENTO DEL INDICADOR "TOGGLE" EN EL HEADER__NAV   *
 **********************************************************/

// Este código permite que al hacer clic en un elemento del menú de navegación, el indicador se desplace. 
// === [USO DE CHATGPT] === Se ha utilizado ChatGPT para la última parte (el cálculo del movimiento del indicador)

const navItems = document.querySelectorAll('.header-nav__item');
  const indicator = document.querySelector('.header-nav__indicator');

  navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Quita la clase 'active' de todos
      navItems.forEach(i => i.classList.remove('active'));
      // Añade la clase 'active' al clicado
      item.classList.add('active');
      // Mueve el indicador al que tiene la clase 'active'
      const percent = (100 / navItems.length) * index; // Divide el 100% del ancho entre el número de ítems, y lo multiplica por la posición del ítem actual (`index`).
      indicator.style.left = `calc(${percent}% + 8px)`; //Accede al **estilo en línea** del elemento `indicator` y posiciona el elemento desde el borde izquierdo de su contenedor a la posición calculada.
    });
  });
