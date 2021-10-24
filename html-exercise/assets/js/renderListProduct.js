import { addToCart } from './cart.js';

export const handleAddToCart = (product) => {
    console.log(JSON.parse(decodeURIComponent(product)))
    let productInfo = JSON.parse(decodeURIComponent(product))
    console.log(productInfo)
    // addToCart(productInfo)
}
// onclick = "(${addToCart})('${encodeURIComponent(JSON.stringify(product))}')"
export const renderListProduct = (arr) => {
    let listProducts = document.querySelector('.list-products')

    listProducts.innerHTML = arr.map(product => `
    <li class="card-product col-3 col-sm-3">
        <div class="card-image">
            <img src=${product.image_url} alt=${product.title} class="image" />
            ${product.discount > 0 ? (`<p class="badge badge-danger">-${product.discount}%</p>`) : ''}
            <span class="cart-icon" onclick="(${handleAddToCart})('${encodeURIComponent(JSON.stringify(product))}')">
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
};
