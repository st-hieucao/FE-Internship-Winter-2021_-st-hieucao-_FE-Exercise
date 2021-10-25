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

// ---------------------- HANDLE SHOW CART PAGE
const bodyHomePage = document.querySelector('.home-page');
const bodyCartPage = document.querySelector('.cart-page');
const cartIcon = document.querySelector('.option-icon-cart');
const goBackHomePage = document.querySelector('.go-back');
let totalPrice = document.querySelector('.total-cost');
let localStorageCart = JSON.parse(localStorage.getItem('cart')) || [];

cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    bodyHomePage.style.display = 'none';
    bodyCartPage.style.display = 'block';
    renderListProductInCart();
});
goBackHomePage.addEventListener('click', (e) => {
    e.preventDefault();
    bodyHomePage.style.display = 'block';
    bodyCartPage.style.display = 'none';
});

// ---------------------- HANDLE CART
const addToCart = (productId) => {
    const existsProduct = localStorageCart.find(
        (item) => item.id === parseInt(productId)
    );
    if (existsProduct) {
        localStorageCart = localStorageCart.map((item) =>
            item.id === parseInt(productId) ? { ...item, qty: item.qty + 1 } : item
        );
    } else {
        let productInData = data.find((item) => item.id === parseInt(productId));
        let newItem = {
            ...productInData,
            qty: 1,
        };
        localStorageCart.push(newItem);
    }
    localStorage.setItem('cart', JSON.stringify(localStorageCart));
};
const descreaseToCart = (productId) => {
    let localStorageCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorageCart = localStorageCart.map((item) =>
        item.id === parseInt(productId) ? { ...item, qty: item.qty - 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(localStorageCart));
};
const deleteToCart = (productId) => {
    let localStorageCart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorageCart = localStorageCart.filter(
        (item) => item.id !== parseInt(productId)
    );
    localStorage.setItem('cart', JSON.stringify(localStorageCart));
};
const updateTotalPrice = () => {
    let localStorageCart = JSON.parse(localStorage.getItem('cart'));
    let price = localStorageCart.reduce(
        (total, item) => total + item.qty * item.salePrice,
        0
    );
    totalPrice.innerHTML = price.toFixed(2);
};

// ---------------------- RENDER PRODUCT IN HOME PAGE & CARTPAGE
const createProductItem = (product) => {
    let cardProduct = document.createElement('li');
    let cardImage = document.createElement('div');
    let imgElement = document.createElement('img');
    let badgeElement = document.createElement('p');
    let cartIcon = document.createElement('span');
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
    cartIcon.className = 'cart-icon';
    cardBody.className = 'card-body';
    cardName.className = 'card-name';
    cardPrices.className = 'card-prices';
    newPrice.className = 'new-price';
    oldPrice.className = 'old-price';
    icon.className = 'fal fa-cart-plus';

    cartIcon.setAttribute('data-id', product.id);
    imgElement.src = product.image_url;
    imgElement.alt = product.title;
    badgeElement.innerHTML = product.discount;
    cardName.innerHTML = product.title;
    newPrice.innerHTML = product.salePrice;
    if (product.price) {
        oldPrice.innerHTML = product.price;
    }

    cartIcon.addEventListener('click', function () {
        let idProduct = this.getAttribute('data-id');
        addToCart(idProduct);
    });

    cartIcon.append(icon);
    cardImage.append(imgElement, badgeElement, cartIcon);
    cardPrices.append(newPrice, oldPrice);
    cardBody.append(cardName, cardPrices);

    cardProduct.append(cardImage, cardBody);
    return cardProduct;
};
const renderListProduct = (arr) => {
    let listProducts = document.querySelector('.list-products');
    listProducts.className = 'list-products row';

    arr.forEach((item) => listProducts.append(createProductItem(item)));
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
    let qtyElement = document.createElement('p');
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
    qtyElement.className = 'qty';
    increaseElement.className = 'increase';
    productPrice.className = 'product-price col-2 text-center';
    productDelete.className = 'product-delete col-1 text-right';

    imgElement.src = product.image_url;
    imgDelete.src = './assets/images/cart/cancel.svg';
    productName.innerHTML = product.title;
    productId.innerHTML = '#261311';
    productColor.innerHTML = 'White';
    productSize.innerHTML = 'XL';
    descreaseElement.innerHTML = '-';
    descreaseElement.setAttribute('data-id', product.id);
    qtyElement.innerHTML = product.qty;
    increaseElement.innerHTML = '+';
    increaseElement.setAttribute('data-id', product.id);
    productPrice.innerHTML = (product.salePrice * product.qty).toFixed(2);
    productDelete.setAttribute('data-id', product.id);

    descreaseElement.addEventListener('click', function (e) {
        let idProduct = this.getAttribute('data-id');
        let productPriceElement =
            this.parentElement.parentElement.parentElement.querySelector(
                '.product-price'
            );
        descreaseToCart(idProduct);
        qtyElement.innerHTML = parseInt(qtyElement.innerHTML) - 1;
        if (parseInt(qtyElement.innerHTML) === 1) {
            descreaseElement.classList.add('disable');
        } else {
            descreaseElement.classList.remove('disable');
        }
        productPriceElement.innerHTML = (
            product.salePrice * parseInt(qtyElement.innerHTML)
        ).toFixed(2);
        updateTotalPrice();
    });
    increaseElement.addEventListener('click', function (e) {
        let idProduct = this.getAttribute('data-id');
        let productPriceElement =
            this.parentElement.parentElement.parentElement.querySelector(
                '.product-price'
            );
        addToCart(idProduct);
        qtyElement.innerHTML = parseInt(qtyElement.innerHTML) + 1;
        productPriceElement.innerHTML = (
            product.salePrice * parseInt(qtyElement.innerHTML)
        ).toFixed(2);
        descreaseElement.classList.remove('disable');
        updateTotalPrice();
    });
    productDelete.addEventListener('click', function () {
        let idProduct = this.getAttribute('data-id');
        let cartItem = this.parentElement;
        deleteToCart(idProduct);
        cartItem.remove();
        updateTotalPrice();
    });

    productImage.append(imgElement);
    productInfo.append(productName, productId);
    optionContent.append(descreaseElement, qtyElement, increaseElement);
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
    let listProducts = document.querySelector('.cart-content');
    let listCartItems = JSON.parse(localStorage.getItem('cart'));
    listProducts.innerHTML = '';

    listCartItems.forEach((item) =>
        listProducts.append(createProductItemInCartPage(item))
    );
};

renderListProduct(data);
renderListProductInCart();
updateTotalPrice();
