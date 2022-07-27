<template>
  <div class="checkout-box">
    <ul class="checkout-list">
      <transition-group name="fade">
        <li v-for="(product, index) in getProductsInCart" :key="index" class="checkout-product">
          <img :src="product.image" alt="" class="product-image">
          <h3 class="product-name">{{ product.name }}</h3>
          <span class="product-price">{{ product.point }}</span>
          <button class="product-remove" @click="remove(index)">X</button>
        </li>
      </transition-group>
    </ul>
    <div v-if="!getProductsInCart.length > 0" class="checkout-message">
      <h3>No products...</h3>
      <router-link to="./">Back to list of products</router-link>
    </div>
    <h3 class="total" v-if="getProductsInCart.length > 0">
      Total Points:  {{ totalPoints() }}
    </h3>

    <div v-if="getProductsInCart.length > 0"  class="user">
      <FormKit
        type="form"
        id="shipping-info"
        submit-label="Save"
        action="#"
        method="post"
        #default="{ value }"
      >
        <h1>Shipping Information</h1>
        <p>
          User information to redeem a prize.
        </p>

        <div class="double">
          <FormKit 
            type="text"
            name="firtsName"
            label="Name"
            :value="getUser.firtsName"
            disabled
          />

          <FormKit 
            type="text"
            name="lastName"
            label="Last Name"
            :value="getUser.lastName "
            disabled
          />
        </div>
        
        <div class="double">
          <FormKit
            type="email"
            name="email"
            label="Email"
            :value="getUser.email"
            disabled
          />

          <FormKit 
            type="text"
            name="profile"
            label="Profile"
            :value="getUser.profile"
            disabled
          />
        </div>
        
        <div class="double">
          <FormKit 
            type="text"
            name="country"
            label="Country"
            :value="getUser.country"
            disabled
          />

          <FormKit 
            type="text"
            name="state"
            label="State"
            :value="getUser.state"
            disabled
          />
        </div>
        
        <div class="double">
          <FormKit 
            type="text"
            name="city"
            label="City"
            :value="getUser.city"
            disabled
          />

          <FormKit 
            type="text"
            name="address"
            label="Shipping Address"
            :value="getUser.address"
            validation="required"
            help="The shipment is subject to the scope of the suppliers in each country."
          />
        </div>

        <div class="double">
          <FormKit
            type="tel"
            name="phone"
            label="Phone number"
            placeholder="xxx-xxx-xxxx"
            validation="required|matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
              matches: 'Phone number must be in the format xxx-xxx-xxxx',
            }"
            validation-visibility="dirty"
          />
          
          <FormKit
            type="checkbox"
            label="Terms and Conditions"
            help="Do you agree to our terms of service?"
            name="terms"
            validation="required"
            validation-visibility="dirty"
          />
        </div>
      
        <pre wrap>{{ value }}</pre>

      </FormKit>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getUser',
    ]),
  },

  methods: {
    ...mapActions([
      'removeProduct',
    ]),
    totalPoints() {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.point, 0);
    },
    remove(index) {
      this.removeProduct(index);
    },
  },
};
</script>

<style scoped>
  .checkout-box {
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1em;
  }

  .checkout-list {
    padding: 0;
  }

  .checkout-product {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr .5fr;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(73, 74, 78, 0.1);
    border-radius: 5px;
    list-style: none;
    box-sizing: border-box;
    padding: .8em;
    margin: 1em 0;
  }

  .checkout-product * {
    place-self: center;
  }
  .product-image {
    grid-column: 1/2;
    width: 50%;
  }

  .product-name {
    box-sizing: border-box;
  }

  .product-price {
    font-size: 1.2em;
    font-weight: bold;
  }

  .product-remove {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }

  .total {
    font-size: 2em;
    font-weight: bold;
    align-self: flex-end;
  }

  .checkout-message {
    font-size: 1.5em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(-40px);
    opacity: 0;
  }
</style>
