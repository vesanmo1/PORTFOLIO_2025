/**********************************************************
 * ACORDEÓN PROPUESTA DE VALOR
 **********************************************************/
// Este código muestra más información al hacer click
// === [VISTO EN CLASE: https://www.youtube.com/watch?v=XGyTnLoGOX0&list=PLJpymL0goBgFXN27jElLCmysKQboKW7uW ] ===

const moreInfoProposal  = document.querySelectorAll(`.accordion__text-container--propossal`)
const arrowProposal     = document.querySelectorAll(`.accordion__arrow--propossal`)

//Cuando hago CLICK en la flecha,
    //Quitar la clase activo de TODOS los bloques
    //Añadimos la clase activo al bloque con la posición de la flecha en la que hemos hecho CLICK y a la flecha
    //si vuelvo a hacer CLICK en la misma flecha quitar la clase active de ambos (mi aportación)

arrowProposal.forEach ((eachArrow , i) => {
    arrowProposal[i].addEventListener(`click`, () => {

        if (moreInfoProposal[i].classList.contains(`active`)) {

            moreInfoProposal[i].classList.remove(`active`)
            arrowProposal[i].classList.remove(`active`)
        }

        else {
            moreInfoProposal.forEach (( eachMoreInfo , i ) => {

                moreInfoProposal[i].classList.remove(`active`)
                arrowProposal[i].classList.remove(`active`)
            })

            moreInfoProposal[i].classList.add(`active`)
            arrowProposal[i].classList.add(`active`)
        }
    })
})

/**********************************************************
 * ACORDEÓN PERFIL DEL CLIENTE
 **********************************************************/
// Repito el código para que un acordeón no cancele al otro


const moreInfoCustomer = document.querySelectorAll(`.accordion__text-container--profile`)
const arrowCustomer    = document.querySelectorAll(`.accordion__arrow--profile`)

moreInfoCustomer.forEach ((eachArrow , j) => {
    arrowCustomer[j].addEventListener(`click`, () => {

        if (moreInfoCustomer[j].classList.contains(`active`)) {

            moreInfoCustomer[j].classList.remove(`active`)
            arrowCustomer[j].classList.remove(`active`)
        }

        else {
            moreInfoCustomer.forEach (( eachMoreInfo , j ) => {

                moreInfoCustomer[j].classList.remove(`active`)
                arrowCustomer[j].classList.remove(`active`)
            })

            moreInfoCustomer[j].classList.add(`active`)
            arrowCustomer[j].classList.add(`active`)
        }
    })
})

/**********************************************************
 * TABS COLOR LOGO VARIATIONS
 **********************************************************/

const variationsButton  = document.querySelectorAll (`.variations__button`)
const variation         = document.querySelectorAll (`.variation`)

//Cuando hacemos CLICK en .variations__button:
    //TODOS .variations__button pierden la clase .active
    //TODOS los .variation pierden la clase .active
    //AÑADIMOS .active en el .variations__button que he hecho CLICK
    //AÑADIMOS .active en el .variation que tenga la misma posición que el .variations__button en el que hemos hecho CLICK

variationsButton.forEach ((eachvariationsButton, i) => {
    variationsButton[i].addEventListener (`click` , () => {
        
        variationsButton.forEach (( eachvariationsButton, i) => {
            variation[i].classList.remove (`active`)
        })

        variation[i].classList.add (`active`)

    })
})