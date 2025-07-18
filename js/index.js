/**********************************************************
 * MOVIMIENTO DEL INDICADOR "TOGGLE" EN EL HEADER__NAV   *
 **********************************************************/

// Este código permite que al hacer clic en un elemento del menú de navegación, el indicador se desplace. 
// === [USO DE CHATGPT] === 

// Seleccionamos todos los elementos del menú y el indicador visual
const navItems = document.querySelectorAll('.header-nav__item');
const indicator = document.querySelector('.header-nav__indicator');

// Obtenemos las secciones relacionadas a cada item a partir del href del <a>
const sections = Array.from(navItems).map(item => {
  const href = item.querySelector('a').getAttribute('href'); 
  return document.querySelector(href);
});

// Función para mover el indicador y actualizar clases active
function moveIndicator(index) {
  // 1. Quitamos active de todos los items
  navItems.forEach(i => i.classList.remove('active'));
  // 2. Añadimos active solo al item que corresponde
  navItems[index].classList.add('active');
  // 3. Mueve el indicador al que tiene la clase 'active'
  const percent = (100 / navItems.length) * index; // Divide el 100% del ancho entre el número de ítems, y lo multiplica por la posición del ítem actual (`index`).
  indicator.style.left = `calc(${percent}% + 8px)`; //Accede al **estilo en línea** del elemento `indicator` y posiciona el elemento desde el borde izquierdo de su contenedor a la posición calculada.
}

// Evento para cuando se hace clic en un elemento del menú
navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    moveIndicator(index);
  });
});

// Evento para cuando se hace scroll, detecta qué sección está visible y mueve el indicador
window.addEventListener('scroll', () => {
  let currentIndex = 0; // Por defecto la primera sección

  // Recorremos las secciones para saber cuál está visible
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    // Condición para saber si el centro de la ventana está dentro de la sección
    if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      currentIndex = index;
    }
  });

  // Llamamos a la función para mover el indicador y actualizar la clase active
  moveIndicator(currentIndex);
});

// Ejecutamos la función de scroll una vez para posicionar correctamente al cargar
window.dispatchEvent(new Event('scroll'));
