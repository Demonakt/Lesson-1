'use strict'

let catalogCardItemImgOverlayButton = document.querySelectorAll('.catalog__card__item__img__overlay__button')
let cart = document.querySelector('#cart')
let burgerLogoAdd = document.querySelector('.burger__logo__add')
let burgerLogoNumber = document.querySelector('.burger__logo__number')
let cartTableBlockItem = document.querySelectorAll('.cart__table__block__item')
let cartTableBlock = document.querySelectorAll('.cart__table__block')
let cartTable = document.querySelector('.cart__table')
let burgerLogoCart = document.querySelector('.burger__logo__cart')
let catalogCardItemTextPrice = document.querySelectorAll('.catalog__card__item__text__price')
let cartTableTotal = document.querySelector('.cart__table__total')
// let price = cartTableTotal['childNodes'][1]['childNodes'][1].innerText

burgerLogoCart.addEventListener('mouseover',function (event) {
    cart.classList.remove('burger__logo__add')
})
document.body.addEventListener('mouseout',function (event) {
    cart.classList.add('burger__logo__add')
})

function math() {

}

catalogCardItemImgOverlayButton.forEach(function (elem, i, catalogCardItemImgOverlayButton) {
    elem.addEventListener('click',function (event) {
        // console.log(catalogCardItemTextPrice[i].innerText)
        let priceCard = catalogCardItemTextPrice[i].innerText;
        cartTableTotal['childNodes'][1]['childNodes'][1].innerText =`${priceCard}`

        console.log(priceCard)
    })
})












