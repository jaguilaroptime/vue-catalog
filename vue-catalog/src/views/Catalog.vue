<template>
    <ul class="listOfProducts">
      <li v-for="(product, index) in products" :key="index" class="product">
        <img :src="product.image">
        <router-link to="/prize">
          <h2 class="product-name"
              @click="addCurrentProduct(product)">
            {{ product.name }}
          </h2>
        </router-link>

        <div class="product-point">
          <span>Point {{ product.point }}</span>
        </div>

        <btn btnColor="btn btn-large btn-sucess"
            :cartIcon="true"
            @click="addProductToCart(product)">
          Redeem Now
        </btn>

      </li>
    </ul>  
</template>

<script>
import useCatalog from '../composables/useCatalog'
import btn from '../components/Btn'

export default {
    components: {
      btn,
    },
    setup() {

      const { 
          products,
          getProductsInCart,
          getPopupWishList,
          addCurrentProduct,
          addProductToCart,
          showPopupWishList,
        } = useCatalog()

      return {
          products,
          getProductsInCart,
          getPopupWishList,
          addCurrentProduct,
          addProductToCart,
          showPopupWishList,
      }

    }
}
</script>

<style scoped>
  
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

  .product-point {
    width: 100%;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5em;
  }
</style>