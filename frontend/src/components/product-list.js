import axios from 'axios';
const Products = {
    data() {
        return {
            isLoading: false,
            products: [],
            error: false,
        }
    },
    methods: {
        async getProducts() {
            const response = await axios.get(storeApi.get_products)
            console.log(response.data)
            if (!response.status === 200) {
                return console.error("cart couldn't be fetched");
            }
            this.products = response.data;
        },
    },
    beforeCreate() {
        if (!storeApi) {
            console.error("storeApi are undefined")
        }
    },
    beforeMount() {
        this.getProducts().then(() => {
            console.log('test')
        })
    },
    mounted() {

    }
}
export default Products;