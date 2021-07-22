import Cart from './components/cart'
import Products from './components/product-list'

const CartMount = Vue.createApp(Cart).mount('#cart')
const CartPage = Vue.createApp(Cart).mount('#cart-page')
const ProductsMount = Vue.createApp(Products).mount('#products')

document.body.addEventListener('click', e => {
    if (e.target && e.target.dataset !== null && typeof e.target.dataset === 'object' && 'productItem' in e.target.dataset) {
        e.preventDefault();
        e.stopPropagation();
        try {
            CartMount.addToCartHandler(e.target.dataset.productItem);
        } catch (error) {
            console.log(error)
        }
        try {
            CartPage.addToCartHandler(e.target.dataset.productItem);
        } catch (error) {
            console.log(error)
        }
    }
});
let x = Array.from(document.querySelectorAll("[data-product-item]")).forEach(button => {
    button.addEventListener("click", e => {
        e.stopPropagation();
        e.preventDefault();

        try {
            CartMount.addToCartHandler(button.dataset.productItem);
        } catch (error) {
            console.log(error)
        }
        try {
            CartPage.addToCartHandler(button.dataset.productItem);
        } catch (error) {
            console.log(error)
        }
    })
});
