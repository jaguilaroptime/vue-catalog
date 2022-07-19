<template>
  <div class="container">
    <mainMenu>
      <btn btnColor="btn btn-small btn-info btn-popup"
         :cartIcon="true"
         @click="showPopupWishList">
         Wish List
        <span class="btn-circle" v-if="hasProduct()">
           {{ getProductsInCart.length }}
        </span>
      </btn>
      <Transition name="appear">
        <popupCart class="cart" v-if="getPopupWishList"/>
      </Transition>
    </mainMenu>
    <!-- <Transition name="leave">
      <router-view></router-view>
    </Transition> -->
    <maskBg v-if="getPopupWishList" @click="showPopupWishList"/>
  
  
    
    <router-view v-slot="{ Component, route }">
      <Transition name="leave">
        <keep-alive>
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </Transition>
    </router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './components/Btn';
import mainMenu from './components/Menu'
import popupCart from './components/Popupcart.vue'
import maskBg from './components/Mask.vue';

export default {
    components: {
      btn,
      mainMenu,
      popupCart,
      maskBg,
    },
    methods: {
    ...mapActions([
      'showOrHiddenPopupWishList',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupWishList() {
      this.showOrHiddenPopupWishList();
    },
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getPopupWishList',
    ]),
  },
}
</script>
<style>
  @import 'assets/css/normalize.css';
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
</style>
