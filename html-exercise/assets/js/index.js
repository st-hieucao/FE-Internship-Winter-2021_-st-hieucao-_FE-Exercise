import { renderListProduct, renderListProductInCart } from './renderListProduct.js'
import { data } from './data.js'

const bodyHomePage = document.querySelector('.home-page')
const bodyCartPage = document.querySelector('.cart-page')
const cartIcon = document.querySelector('.option-icon-cart')
const goBackHomePage = document.querySelector('.go-back')

cartIcon.addEventListener('click', (e) => {
    e.preventDefault()
    bodyHomePage.style.display = 'none';
    bodyCartPage.style.display = 'block';
    renderListProductInCart()
})
goBackHomePage.addEventListener('click', (e) => {
    e.preventDefault()
    bodyHomePage.style.display = 'block';
    bodyCartPage.style.display = 'none';
})

renderListProduct(data)
// renderListProductInCart()

