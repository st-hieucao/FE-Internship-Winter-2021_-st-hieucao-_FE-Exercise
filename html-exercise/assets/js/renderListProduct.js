const addToCart = (product) => {
    console.log('product')
}
// onclick="(${handleClickAddToCart})('${product}')"
export const renderListProduct = (arr) => {
    let listProducts = document.querySelector('.list-products')

    listProducts.innerHTML = arr.map(product => `
    <li class="card-product col-3 col-sm-3">
        <div class="card-image">
            <img src=${product.image_url} alt=${product.title} class="image" />
            ${product.discount > 0 ? (`<p class="badge badge-danger">-${product.discount}%</p>`) : ''}
            <span class="cart-icon" onclick='addToCart()'>
                <i class="fal fa-cart-plus"></i>
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
