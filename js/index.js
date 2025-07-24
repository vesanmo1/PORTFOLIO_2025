/**********************************************************
 * ACTIVACIÓN Y DESACTIVACIÓN DE LA VISIBILIDAD DEL .HEADER-NAV
 **********************************************************/
// Este código permite que al hacer clic el header-nav__btn al header.nav se le añade la clase active y se hace visible
// === [VISTO EN CLASE: https://www.youtube.com/watch?v=_M0K_q617Kc&t=5s] === 

const headerNavButton = document.querySelector ('.header-nav__btn')
const headerNav = document.querySelector ('.header-nav')

//mi muy pequeña aportacion 🥲
const burguerMenu = document.querySelector ('.nav-menu__container--burguer')
const crossMenu = document.querySelector ('.nav-menu__container--cross')

headerNavButton.addEventListener(`click`,()=>{
  headerNav.classList.toggle(`active`)

  //mi muy pequeña aportacion 🥲 (cambiar el menú burguer por la cruz cuando el hader-nav aparece y desaparece) 
  burguerMenu.classList.toggle(`active`)
  crossMenu.classList.toggle(`active`)
})

/**********************************************************
 * MOVIMIENTO DEL INDICADOR EN EL HEADER__NAV
 **********************************************************/
// Este código permite que al hacer clic en un elemento del menú de navegación, el indicador se desplace. 
// === [USO DE CHATGPT] ===

document.addEventListener(`DOMContentLoaded`, () => {
  const navItems     = document.querySelectorAll(`.header-nav__item`);
  const indicator    = document.querySelector(`.header-nav__indicator`);
  const mobileScreen = window.matchMedia(`(max-width: 768px)`); // «mobile»

  if (!navItems.length || !indicator) return; // Seguridad: salimos si falta algo

  // 1 · Guarda el índice de cada ítem
  navItems.forEach((item, i) => (item.dataset.index = i));

  // 2 · Función para mover el indicador
  function moveIndicator(index) {
    const percent = (100 / navItems.length) * index;

    if (mobileScreen.matches) {
      indicator.style.top  = `calc(${percent}% + 0.5rem)`; // eje Y
      indicator.style.left = ``;                           // limpiamos eje X
    } else {
      indicator.style.left = `calc(${percent}% + 0.5rem)`; // eje X
      indicator.style.top  = ``;                           // limpiamos eje Y
    }
  }

  // 3 · Click en un ítem
  function handleClick(e) {
    // Quita la clase 'active' de todos
    navItems.forEach(i => i.classList.remove(`active`));
    const item = e.currentTarget;     
    // Añade la clase 'active' al clicado            
    item.classList.add(`active`);
    // Mueve el indicador
    moveIndicator(+item.dataset.index);
  
  //mi muy pequeña aportacion 🥲 (para que se cierre el header-nav cuando haces click en in ítem y vuelva a aparecer el burguer-menu)
  /* ---------- AUTO‑CERRAR MENÚ  ---------- */
    headerNav.classList.toggle(`active`);
    burguerMenu.classList.toggle(`active`);
    crossMenu.classList.toggle(`active`);
  }

  // 4 · Recalcula al detectar cambio de breakpoint o resize
  function recalcIndicator() {
    const active = document.querySelector(`.header-nav__item.active`);
    if (active) moveIndicator(+active.dataset.index);
  }

  // 5 · Listeners
  navItems.forEach(item => item.addEventListener(`click`, handleClick));
  mobileScreen.addEventListener(`change`, recalcIndicator); // solo cuando cruza 768 px
  window.addEventListener(`resize`, recalcIndicator);       // por si cambias el CSS

  // 6 · Posiciona el indicador sobre el primer ítem al cargar
  moveIndicator(0);
});

/**********************************************************
 * ANIMACIÓN "FLIP CARD"
 **********************************************************/
// Animación de tarjeta giratoria al hacer CLICK
// === [HECHO A PARTIR DE UN VÍDEO VISTO EN YOUTUBE: https://www.youtube.com/watch?v=qkBziDQnboc] === 

const flipButton = document.querySelector ('.flip__button')
const faceA = document.querySelector ('.footer__card--faceA')
const faceB = document.querySelector ('.footer__card--faceB')

//Cuando hago CLICK sobre el botón se aplica la condición `if` y cuando hago click por segunda vez se aplica la condición `else`
flipButton.addEventListener(`click`,()=>{

  if (faceA.style.transform === ``) {   //detecta si aún no se ha aplicado ninguna transformación mediante JavaScript (si hay estilos de rotación aplicados mediante CSS la función seguirá viendo ``)
    faceA.style.transform = `rotateY(-180deg)`; //se le aplica a la cara A una rotación de 180°, haciendo que desaparezca del frente.
    faceB.style.transform = `rotateY(0deg)`; //se le aplica a la cara B una rotación de 0°, haciendo que aparezca en el frente.
  }
    else { //Si la condición del if es falsa (es decir, transform NO está vacío) significa que la tarjeta está “girada” y queremos deshacer la rotación.
      //Elimina las transformaciones en línea de ambas caras.
      faceA.style.transform = ``;
      faceB.style.transform = ``;
      //Al poner la cadena vacía (``) el elemento vuelve a su estado original (el que marque el CSS externo).
    }
})







