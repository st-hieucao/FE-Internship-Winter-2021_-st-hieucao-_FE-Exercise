
export const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const existsProduct = cart.find(item => item.id === product.id)
    if (existsProduct) {
        cart = cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
    } else {
        let newItem = {
            ...product,
            qty: 1,
        }
        cart.push(newItem)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const descreaseToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart)
    if (product.qty === 1) {
        cart = cart.filter(item => item.id !== product.id)
    } else {
        cart = cart.map(item => item.id === product.id ? { ...item, qty: item.qty - 1 } : item)
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const deleteToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart = cart.filter(item => item.id !== product.id)
    localStorage.setItem('cart', JSON.stringify(cart))
}