import axios from 'axios';
const CartVO = {
    data() {
        return {
            isLoading: false,
            maxCartItems: null,
            cart: {
                items: [],
                total: null,
                shipping: null,
                total_items: 0,
            },
            cartModal: null,
            previewModal: null,
            checkoutModal: null,
            quantityElements: [],
            error: false,
        }
    },
    watch: {
        'cart.total_items'(value) {
            // this.quantityElements.forEach(element => {
            //     element.setAttribute('data-cart-quantity', parseInt(value, 10))
            // })
            console.log(value)
        }
    },
    methods: {
        async removeFromCart(cartItemKey) {
            const response = await axios.post('/wp-json/wc/store/cart/remove-item', {
                key: cartItemKey,
            }, {
                headers: {
                    'X-WC-Store-API-Nonce': storeApi.nonce
                }
            })
            if (!response.status === 200) {
                this.showError(response.data)
                return console.error("product couldn't be removed")
            }
            if (response.data) {
                this.cart = response.data
            }
        },
        async addToCart(productId) {

            const response = await axios.post('/wp-json/wc/store/cart/add-item', {
                id: productId,
                quantity: 1
            }, {
                headers: {
                    'X-WC-Store-API-Nonce': storeApi.nonce
                }
            })

            if (!response.status === 200) {
                this.showError(response.data)
                return console.error("product couldn't be added")
            }
            if (response.data) {
                this.cart = response.data
            }
        },
        async refreshCart() {
            const response = await axios.get(storeApi.get_cart)
            console.log(response.data)
            if (!response.status === 200) {
                return console.error("cart couldn't be fetched");
            }
            this.cart = {
                items: response.data.items,
                total: response.data.totals,
                shipping: response.data.shipping_rates,
                total_items: response.data.items.length,
            };
        },
        showError(errorMessage = '') {
            this.error = errorMessage;
        },
        async addToCartHandler(productId, sku) {
            await this.addToCart(productId, sku)
        },
    },
    computed: {
        emptySlots() {
            let slots = [];
            if (this.maxCartItems > this.cart.items.length) {
                slots = new Array(this.maxCartItems - this.cart.items.length);
            }
            return slots;
        },
    },
    beforeCreate() {
        if (!storeApi) {
            console.error("storeApi are undefined")
        }
    },
    beforeMount() {
        this.maxCartItems = storeApi.max_cart_items || 4
        this.refreshCart().then(() => {
            console.log('test')
        })
    },
    mounted() {

    }
}
export default CartVO;