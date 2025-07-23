/**********************************************************
 * MOVIMIENTO DEL INDICADOR "TOGGLE" EN EL HEADER__NAV
 *  – horizontal (fila)  |  vertical (columna ≤ 768 px)
 **********************************************************/

const navItems  = document.querySelectorAll('.header-nav__item');
const indicator = document.querySelector('.header-nav__indicator');
const mq        = window.matchMedia('(max-width: 768px)'); // «mobile»

// Guarda el índice de cada ítem para no recalcularlo
navItems.forEach((item, i) => item.dataset.index = i);

// Mueve el indicador en la dirección correcta
function moveIndicator(index) {
  const percent = (100 / navItems.length) * index;

  if (mq.matches) {                    // menú en columna
    indicator.style.top  = `calc(${percent}% + 0.5rem)`;   // vertical
  } else {                             // menú en fila
    indicator.style.left = `calc(${percent}% + 8px)`;   // horizontal
  }
}

// Marca activo y desplaza
function handleClick(e) {
  navItems.forEach(i => i.classList.remove('active'));
  const item = e.currentTarget;
  item.classList.add('active');
  moveIndicator(Number(item.dataset.index));
}

// Listeners para cada ítem
navItems.forEach(item => item.addEventListener('click', handleClick));

// Recoloca si el usuario cambia el tamaño/orientación
mq.addEventListener('change', () => {
  const active = document.querySelector('.header-nav__item.active');
  if (active) moveIndicator(Number(active.dataset.index));
});












