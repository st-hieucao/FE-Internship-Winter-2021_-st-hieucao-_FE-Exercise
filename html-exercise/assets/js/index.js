import { renderListProduct } from './renderListProduct.js'
const data = [
    {
        id: 1,
        title: 'T-Shirt Summer Vibes',
        image_url: './assets/images/product1.png',
        alt: 't_shirt_summer',
        salePrice: 119.99,
        price: 130.25,
        discount: 10,
    },
    {
        id: 2,
        title: 'Loose Knit 3/4 Sleeve',
        image_url: './assets/images/product2.png',
        alt: 'loose_knit_sleeve',
        salePrice: 119.99,
        discount: 0,
    },
    {
        id: 3,
        title: 'Basic Slim Fit T-Shirt',
        image_url: './assets/images/product3.png',
        alt: 'slim_fit_t_shirt',
        salePrice: 79.99,
        discount: 0,
    },
    {
        id: 4,
        title: 'Loose Textured T-Shirt',
        image_url: './assets/images/product4.png',
        alt: 'loose_textured_t_shirt',
        salePrice: 119.99,
        discount: 0,
    },
];
const bodyHomePage = document.querySelector('.home-page')
const bodyCartPage = document.querySelector('.cart-page')
const cartIcon = document.querySelector('.option-icon-cart')
const goBackHomePage = document.querySelector('.go-back')
console.log([bodyHomePage, bodyCartPage, cartIcon])

cartIcon.addEventListener('click', (e) => {
    e.preventDefault()
    bodyHomePage.style.display = 'none';
    bodyCartPage.style.display = 'block';
})

goBackHomePage.addEventListener('click', (e) => {
    e.preventDefault()
    bodyHomePage.style.display = 'block';
    bodyCartPage.style.display = 'none';
})

renderListProduct(data)

