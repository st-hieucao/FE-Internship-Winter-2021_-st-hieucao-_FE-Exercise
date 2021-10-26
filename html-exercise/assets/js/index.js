const data = [
    {
        id: 1,
        name: 'T-Shirt Summer Vibes',
        image_url: './assets/images/product1.png',
        salePrice: 119.99,
        price: 130.25,
        discount: 10,
    },
    {
        id: 2,
        name: 'Loose Knit 3/4 Sleeve',
        image_url: './assets/images/product2.png',
        salePrice: 119.99,
        discount: 0,
    },
    {
        id: 3,
        name: 'Basic Slim Fit T-Shirt',
        image_url: './assets/images/product3.png',
        salePrice: 79.99,
        discount: 0,
    },
    {
        id: 4,
        name: 'Loose Textured T-Shirt',
        image_url: './assets/images/product4.png',
        salePrice: 119.99,
        discount: 0,
    },
];

// ---------------------- HANDLE SHOW CART PAGE
const $bodyHomePage = document.querySelector('.home-page');
const $bodyCartPage = document.querySelector('.cart-page');
const $cartIcon = document.querySelector('.option-icon-cart');
const $goBackHomePage = document.querySelector('.go-back');
let $listProducts = document.querySelector('.cart-content');
let $listProductsInHomePage = document.querySelector('.list-products');
let $totalPrice = document.querySelector('.total-cost');

const toggleDisplayElement = (showHomePage = true) => {
    if (showHomePage) {
        $bodyHomePage.style.display = 'block';
        $bodyCartPage.style.display = 'none';
    } else {
        $bodyHomePage.style.display = 'none';
        $bodyCartPage.style.display = 'block';
        renderListProductInCart();
    }
}
$cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    toggleDisplayElement(false)
    renderListProductInCart();
});
$goBackHomePage.addEventListener('click', (e) => {
    e.preventDefault();
    toggleDisplayElement()
});

const handleAddEventForDescreaseAndIncreaseButon = (_this, product, isIncreasing = true) => {
    let idProduct = _this.getAttribute('data-id');
    let productPriceElement =
        _this.parentElement.parentElement.parentElement.querySelector(
            '.product-price'
        );
    let descreaseElement = _this.parentElement.querySelector(
        '.descrease'
    );
    let quantityElement = _this.parentElement.querySelector(
        '.quantity'
    );
    if (isIncreasing === false) {
        handleDecrement(idProduct);
        quantityElement.innerHTML = +quantityElement.innerHTML - 1;
        if (+quantityElement.innerHTML === 1) {
            descreaseElement.classList.add('disable');
        } else {
            descreaseElement.classList.remove('disable');
        }
    } else {
        descreaseElement.classList.remove('disable');
        quantityElement.innerHTML = +quantityElement.innerHTML + 1;
        addToCart(idProduct);
    }
    productPriceElement.innerHTML = (
        product.salePrice * + quantityElement.innerHTML
    ).toFixed(2);
    updateTotalPrice();
}

// ---------------------- HANDLE CART
const addToCart = (productId) => {
    let selectedProducts = JSON.parse(localStorage.getItem('cart')) || [];

    const existsProduct = selectedProducts.findIndex(
        (item) => item.id === +productId
    );
    if (existsProduct !== -1) {
        selectedProducts[existsProduct] = { ...selectedProducts[existsProduct], quantity: selectedProducts[existsProduct].quantity + 1 }
    } else {
        let productInData = data.find((item) => item.id === +productId);
        let newItem = {
            ...productInData,
            quantity: 1,
        };
        selectedProducts.push(newItem);
    }
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
};
const handleDecrement = (productId) => {
    let selectedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    let indexProduct = selectedProducts.findIndex(
        (item) => item.id === +productId
    );
    selectedProducts[indexProduct] = { ...selectedProducts[indexProduct], quantity: selectedProducts[indexProduct].quantity - 1 }
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
};
const deleteElementFromCart = (productId) => {
    let selectedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    selectedProducts = selectedProducts.filter(
        (item) => item.id !== +productId)
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
};
const updateTotalPrice = () => {
    let selectedProducts = JSON.parse(localStorage.getItem('cart'));
    let price = selectedProducts.reduce(
        (total, item) => total + item.quantity * item.salePrice,
        0
    );
    $totalPrice.innerHTML = price.toFixed(2);
};

// ---------------------- RENDER PRODUCT IN HOME PAGE & CARTPAGE
const createProductItem = (product) => {
    let cardProduct = document.createElement('li');
    let cardImage = document.createElement('div');
    let imgElement = document.createElement('img');
    let badgeElement = document.createElement('p');
    let $cartIcon = document.createElement('span');
    let cardBody = document.createElement('div');
    let cardName = document.createElement('h4');
    let cardPrices = document.createElement('div');
    let newPrice = document.createElement('span');
    let oldPrice = document.createElement('span');
    let icon = document.createElement('i');

    cardProduct.className = 'card-product col-3 col-sm-3';
    cardImage.className = 'card-image';
    imgElement.className = 'image';
    badgeElement.className = 'badge badge-danger';
    $cartIcon.className = 'cart-icon';
    cardBody.className = 'card-body';
    cardName.className = 'card-name';
    cardPrices.className = 'card-prices';
    newPrice.className = 'new-price';
    oldPrice.className = 'old-price';
    icon.className = 'fal fa-cart-plus';

    $cartIcon.setAttribute('data-id', product.id);
    imgElement.src = product.image_url;
    imgElement.alt = product.name;
    badgeElement.innerHTML = product.discount;
    cardName.innerHTML = product.name;
    newPrice.innerHTML = product.salePrice;
    if (product.price) {
        oldPrice.innerHTML = product.price;
    }

    $cartIcon.addEventListener('click', function () {
        let idProduct = this.getAttribute('data-id');
        addToCart(idProduct);
    });

    $cartIcon.append(icon);
    cardImage.append(imgElement, badgeElement, $cartIcon);
    cardPrices.append(newPrice, oldPrice);
    cardBody.append(cardName, cardPrices);

    cardProduct.append(cardImage, cardBody);
    return cardProduct;
};
const renderListProduct = (products) => {
    $listProductsInHomePage.className = 'list-products row';

    products.forEach((item) => $listProductsInHomePage.append(createProductItem(item)));
};
const createProductItemInCartPage = (product) => {
    let productItem = document.createElement('tr');
    let productImage = document.createElement('td');
    let imgElement = document.createElement('img');
    let productInfo = document.createElement('td');
    let productName = document.createElement('span');
    let productId = document.createElement('span');
    let productColor = document.createElement('td');
    let productSize = document.createElement('td');
    let productOptions = document.createElement('td');
    let optionContent = document.createElement('span');
    let descreaseElement = document.createElement('p');
    let quantityElement = document.createElement('p');
    let increaseElement = document.createElement('p');
    let productPrice = document.createElement('td');
    let productDelete = document.createElement('td');
    let imgDelete = document.createElement('img');

    productImage.className = 'product-image col-1';
    productInfo.className = 'product-info col-2';
    productName.className = 'product-name';
    productId.className = 'product-id';
    productColor.className = 'product-color col-2 text-center';
    productSize.className = 'product-size col-2 text-center';
    productOptions.className = 'product-options col-2 text-center';
    optionContent.className = 'options-content d-flex justify-content-center';
    descreaseElement.className = 'descrease';
    quantityElement.className = 'quantity';
    increaseElement.className = 'increase';
    productPrice.className = 'product-price col-2 text-center';
    productDelete.className = 'product-delete col-1 text-right';

    imgElement.src = product.image_url;
    imgDelete.src = './assets/images/cart/cancel.svg';
    productName.innerHTML = product.name;
    productId.innerHTML = '#261311';
    productColor.innerHTML = 'White';
    productSize.innerHTML = 'XL';
    descreaseElement.innerHTML = '-';
    descreaseElement.setAttribute('data-id', product.id);
    quantityElement.innerHTML = product.quantity;
    increaseElement.innerHTML = '+';
    increaseElement.setAttribute('data-id', product.id);
    productPrice.innerHTML = (product.salePrice * product.quantity).toFixed(2);
    productDelete.setAttribute('data-id', product.id);

    descreaseElement.addEventListener('click', function () {
        handleAddEventForDescreaseAndIncreaseButon(this, product, false)
    })
    increaseElement.addEventListener('click', function () {
        handleAddEventForDescreaseAndIncreaseButon(this, product, true)
    });
    productDelete.addEventListener('click', function () {
        let idProduct = this.getAttribute('data-id');
        let cartItem = this.parentElement;
        deleteElementFromCart(idProduct);
        cartItem.remove();
        updateTotalPrice();
    });

    productImage.append(imgElement);
    productInfo.append(productName, productId);
    optionContent.append(descreaseElement, quantityElement, increaseElement);
    productOptions.append(optionContent);
    productDelete.append(imgDelete);
    productItem.append(
        productImage,
        productInfo,
        productColor,
        productSize,
        productOptions,
        productPrice,
        productDelete
    );
    return productItem;
};
const renderListProductInCart = () => {
    let $listCartItems = JSON.parse(localStorage.getItem('cart'));
    $listProducts.innerHTML = '';

    $listCartItems.forEach((item) =>
        $listProducts.append(createProductItemInCartPage(item))
    );
};

renderListProduct(data);
renderListProductInCart();
updateTotalPrice();
