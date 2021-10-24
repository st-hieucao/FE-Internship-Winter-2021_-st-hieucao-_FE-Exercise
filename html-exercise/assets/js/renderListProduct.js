import { data } from './data.js'
import { addToCart, descreaseToCart, deleteToCart } from './cart.js'

export const addEventClickForProduct = () => {
    let cartIcons = document.querySelectorAll('.cart-icon')
    cartIcons.forEach(item => {
        item.addEventListener('click', (e) => {
            let idProduct = item.getAttribute('data-id')
            let existsProduct = data.find(item => item.id == parseInt(idProduct))
            if (existsProduct) {
                addToCart(existsProduct)
            } else {
                return
            }
        })
    })
}

export const addEventClickForDescreaseElements = () => {
    let descreaseElements = document.querySelectorAll('.descrease')

    descreaseElements.forEach(item => {
        item.addEventListener('click', (e) => {
            let idProduct = item.getAttribute('data-id')
            let existsProduct = data.find(item => item.id == parseInt(idProduct))
            if (existsProduct) {
                descreaseToCart(existsProduct)
                renderListProductInCart()
            } else {
                return
            }
        })
    })
}
export const addEventClickForIncreaseElements = () => {
    let increaseElements = document.querySelectorAll('.increase')

    increaseElements.forEach(item => {
        item.addEventListener('click', (e) => {
            let idProduct = item.getAttribute('data-id')
            let existsProduct = data.find(item => item.id == parseInt(idProduct))
            if (existsProduct) {
                addToCart(existsProduct)
                renderListProductInCart()
            } else {
                return
            }
        })
    })

}
export const addEventClickForDeleteElements = () => {
    let deleteElements = document.querySelectorAll('.product-delete')

    deleteElements.forEach(item => {
        item.addEventListener('click', (e) => {
            let idProduct = item.getAttribute('data-id')
            let existsProduct = data.find(item => item.id == parseInt(idProduct))
            if (existsProduct) {
                deleteToCart(existsProduct)
                renderListProductInCart()
            } else {
                return
            }
        })
    })

}

export const renderListProduct = (arr) => {
    let listProducts = document.querySelector('.list-products')

    listProducts.innerHTML = arr.map(product => `
    <li class="card-product col-3 col-sm-3">
        <div class="card-image">
            <img src=${product.image_url} alt=${product.title} class="image" />
            ${product.discount > 0 ? (`<p class="badge badge-danger">-${product.discount}%</p>`) : ''}
            <span class="cart-icon" data-id="${product.id}">
                <i class="fal fa-cart-plus"></i
            </span>
        </div>
        <div class="card-body">
            <h4 class="card-name">${product.title}</h4>
            <div class="card-prices">
                <span class="new-price">${product.salePrice}</span>
                ${product.price ? `<span class="old-price">${product.price}</span>` : ''}
            </div>
        </div>
    </li>`).join('')
    addEventClickForProduct()
};

export const renderListProductInCart = () => {
    let listProducts = document.querySelector('.cart-content .list-products')
    let listCartItems = JSON.parse(localStorage.getItem('cart'))

    listProducts.innerHTML = listCartItems.map(item => `
    <div class="product-item row">
        <span class="product-image col-1"><img src=${item.image_url}></span>
        <span class="product-info col-2">
        <span class="product-name">${item.title}</span>
        <span class="product-id">#261311</span>
        </span>
        <span class="product-color col-2 text-center">White</span>
        <span class="product-size col-2 text-center">XL</span>
        <div class="product-options col-2 text-center">
        <div class="options-content d-flex justify-content-center">
            <span class="descrease" data-id="${item.id}">-</span>
            <span class="qty" data-id="${item.id}">${item.qty}</span>
            <span class="increase" data-id="${item.id}">+</span>
        </div>
        </div>
        <span class="product-price col-2 text-center">${item.salePrice}</span>
        <span class="product-delete col-1 text-right" data-id="${item.id}"><img src='./assets/images/cart/cancel.svg'></span>
    </div>`)

    addEventClickForDescreaseElements()
    addEventClickForIncreaseElements()
    addEventClickForDeleteElements()
}
