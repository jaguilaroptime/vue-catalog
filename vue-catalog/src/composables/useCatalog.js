import { useStore } from 'vuex'
import { computed, reactive, ref } from 'vue'

const useCatalog = () => {
    const store = useStore()
    const searchQuery = ref("");
    //const addProductToCart = (product) => store.commit('ADD_PRODUCT', product )

    const searchedProducts = computed(() => {
      store.getters['getAllProducts']
        /* return products.filter((product) => {
          return (
            product.title
              .toLowerCase()
              .indexOf(searchQuery.value.toLowerCase()) != -1
          );
        }); */
      });
    
    return {
        //Getters
        products: computed(() => store.getters['getAllProducts']),
        getProductsInCart: computed(() => store.getters['getProductsInCart']),
        getPopupWishList: computed(() => store.getters['getPopupWishList']),

        // Methods
        addCurrentProduct( product )  { store.commit('CURRENT_PRODUCT', product ) },
        addProductToCart: ( product ) => store.commit('ADD_PRODUCT', product ),
        showPopupWishList: () => store.commit('SHOW_POPUP_WISH_LIST'),
        //addProductToCart,
        searchedProducts,
        searchQuery,
    }
}
export default useCatalog