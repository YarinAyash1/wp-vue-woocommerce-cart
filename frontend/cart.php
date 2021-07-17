<div ref="cart" id="cart" class="cart">
    <div class="cart__items">
        <div class="cart__item" v-for="item in cart.items">
            <h3><a :href="item.permalink">{{item.name}}</a><span>{{item.quantity}}</span></h3>
            <button @click="removeFromCart(item.key)">Remove from cart</button>
        </div>
    </div>
</div>