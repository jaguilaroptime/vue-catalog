<template>
  <div class="container">

    <mainMenu>
      <btn btnColor="btn btn-small btn-info btn-popup"
         :cartIcon="true"
         @click="showPopupCart">
         Cart Prizes
        <span class="btn-circle" v-if="getProductsInCart.length > 0">
           {{ getProductsInCart.length }}
        </span>
      </btn>
      <transition name="appear">
        <popupCart class="cart" v-if="getPopupCart"/>
      </transition>
    </mainMenu>
    <transition name="leave">
      <router-view></router-view>
    </transition>
    <maskBg v-if="getPopupCart" @click="showPopupCart"/>

    <h1>All Prizes</h1>
    <ul class="listOfProducts">
      <li v-for="(product, index) in products" :key="index" class="product">
          <img :src="product.image">
          <router-link to="/product-details">
          <h2 class="product-name"
              @click="addCurrentProduct(product)">
            {{ product.name }}
          </h2>
        </router-link>

        <div class="product-price">
          <span>Point {{ product.point }}</span>
        </div>

        <btn btnColor="btn btn-large btn-sucess"
            :cartIcon="true"
            @click="addProductToCart(product)">
          Add to cart
        </btn>

      </li>
    </ul>  
  </div>

</template>

<script>
import useCatalog from '../composables/useCatalog'
import btn from '../components/Btn';
import mainMenu from '../components/Menu'
import popupCart from '../components/Popupcart.vue'
import maskBg from '../components/Mask.vue';

export default {
    components: {
      btn,
      mainMenu,
      popupCart,
      maskBg,
    },
    setup() {

      const { 
          products,
          getProductsInCart,
          getPopupCart,
          addCurrentProduct,
          addProductToCart,
          showPopupCart
        } = useCatalog()

      return {
          products,
          getProductsInCart,
          getPopupCart,
          addCurrentProduct,
          addProductToCart,
          showPopupCart
      }

    }
}
</script>

<style scoped>
  @import '../assets/css/normalize.css';
@import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .container {
    width: 100%;
  }

  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }

  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }

  .appear-enter-active {
    animation: appear-animation .5s;
  }

  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }

  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }

  .listOfProducts {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  .product {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
  }

  .product-name {
    font-size: 1.2em;
    font-weight: normal;
  }

  .product-name:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .product-price {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }
</style>