import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancel;
const CartVO = {
    data() {
        return {
            isLoading: true,
            maxCartItems: null,
            cart: {
                items: [],
                total: null,
                shipping: null,
                total_items: 0,
            },
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
        async updateToCart(cartItemKey, qty) {
            //Check if there are any previous pending requests

            try {

                const response = await axios.post('/wp-json/wc/store/cart/update-item', {
                    key: cartItemKey,
                    quantity: qty,
                    cancelToken: new CancelToken(function executor(c) {
                        // An executor function receives a cancel function as a parameter
                        cancel = c;
                    })
                }, {
                    headers: {
                        'X-WC-Store-API-Nonce': storeApi.nonce
                    }
                })
                // cancel the request
                cancel();
                if (!response.status === 200) {
                    this.showError(response.data)
                    return console.error("product couldn't update.")
                }
                if (response.data) {
                    this.cart = response.data
                }
            } catch (error) {
                console.log(error)
            }
        },
        async refreshCart() {
            const response = await axios.get(storeApi.get_cart)
            if (!response.status === 200) {
                return console.error("cart couldn't be fetched");
            }
            this.cart = {
                items: response.data.items,
                total: response.data.totals,
                shipping: response.data.shipping_rates,
                total_items: response.data.items.length,
            };
            this.isLoading = false;
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