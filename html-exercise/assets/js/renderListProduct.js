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
            let qtyElement = item.parentElement.querySelector('.qty')
            let descreaseElement = item.parentElement.querySelector('.descrease')
            let existsProduct = data.find(item => item.id == parseInt(idProduct))
            if (existsProduct) {
                descreaseToCart(existsProduct)
                if (parseInt(qtyElement.innerHTML) === 1) {
                    descreaseElement.classList.add("disable");
                } else {
                    qtyElement.innerHTML = parseInt(qtyElement.innerHTML) - 1
                    descreaseElement.classList.remove("disable");
                }
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
            let qtyElement = item.parentElement.querySelector('.qty')
            let existsProduct = data.find(item => item.id == parseInt(idProduct))
            if (existsProduct) {
                addToCart(existsProduct)
                qtyElement.innerHTML = parseInt(qtyElement.innerHTML) + 1
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
            let cartItemElement = item.parentElement
            if (existsProduct) {
                deleteToCart(existsProduct)
                cartItemElement.remove()
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
    console.log('render cart')
    let listProducts = document.querySelector('.cart-content')
    let listCartItems = JSON.parse(localStorage.getItem('cart'))

    listCartItems.innerHTML += ''
    listCartItems.forEach(item => listProducts.innerHTML += `
    <tr>
        <td class="product-image col-1"><img src=${item.image_url}></td>
        <td class="product-info col-2">
        <span class="product-name">${item.title}</span>
        <span class="product-id">#261311</span>
        </td>
        <td class="product-color col-2 text-center">White</td>
        <td class="product-size col-2 text-center">XL</td>
        <td class="product-options col-2 text-center">
        <span class="options-content d-flex justify-content-center">
            <p class=${item.qty <= 1 ? "descrease disable" : "descrease"} data-id="${item.id}">-</p>
            <p class="qty" data-id="${item.id}">${item.qty}</p>
            <p class="increase" data-id="${item.id}">+</p>
        </span>
        </td>
        <td class="product-price col-2 text-center">${item.salePrice * item.qty}</td>
        <td class="product-delete col-1 text-right" data-id="${item.id}"><img src='./assets/images/cart/cancel.svg'></td>
    </tr>`)

    addEventClickForDescreaseElements()
    addEventClickForIncreaseElements()
    addEventClickForDeleteElements()
}
