<div id="products" class="products">
    <div class="products__list">
        <div class="products__item" v-for="item in products">
            <h3><a :href="item.permalink">{{item.name}}</a></h3>
            <button :data-product-item="item.id">Add to cart</button>
        </div>
    </div>
</div>