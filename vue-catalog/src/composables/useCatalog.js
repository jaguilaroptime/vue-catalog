import { useStore } from 'vuex'
import { computed } from 'vue'

const useCatalog = () => {
    const store = useStore()

    //const addProductToCart = (product) => store.commit('ADD_PRODUCT', product )
    
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
    }
}
export default useCatalog