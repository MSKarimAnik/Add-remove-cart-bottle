const getStoredCart =()=>{
const shortedCartString =  localStorage.getItem('cart')
    if (shortedCartString) {
    return JSON.parse(shortedCartString)
    }
    return[];
}

const saveCartToLS =cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLS = id =>{
    const cart = getStoredCart ();
    cart.push(id);
    saveCartToLS(cart);
}

const removeFromLS = id =>{
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx !==id);
    saveCartToLS(remaining);

}

export {addToLS, getStoredCart, removeFromLS}
