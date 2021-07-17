import Cart from './components/cart'
import Products from './components/product-list'

const CartMount = Vue.createApp(Cart).mount('#cart')
const ProductsMount = Vue.createApp(Products).mount('#products')

document.body.addEventListener('click', e => {
    if (e.target && e.target.dataset !== null && typeof e.target.dataset === 'object' && 'productItem' in e.target.dataset) {
        e.preventDefault();
        e.stopPropagation();
        CartMount.addToCartHandler(e.target.dataset.productItem);
    }
});
let x = Array.from(document.querySelectorAll("[data-product-item]")).forEach(button => {
    button.addEventListener("click", e => {
        e.stopPropagation();
        e.preventDefault();
        CartMount.addToCartHandler(button.dataset.productItem);
    })
});
