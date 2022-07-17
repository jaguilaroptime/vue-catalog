import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    notebooks: [
      {
        id: uuidv4(),
        name: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
        point: 2259,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
        stars: 5,
        totalReviews: 230,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        id: uuidv4(),
        name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
        point: 1490,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],
    smartphones: [
      {
        id: uuidv4(),
        name: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
        point: 1199,
        image: 'https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg',
        stars: 4,
        totalReviews: 450,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
      {
        id: uuidv4(),
        name: 'Smartphone Moto G 5S Dual Chip Android 7.0',
        point: 929,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
        stars: 1.5,
        totalReviews: 11,
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      }
    ],
    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupWishList: false,
  },
  mutations: {
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    SHOW_POPUP_WISH_LIST: (state) => {
      state.showPopupWishList = !state.showPopupWishList;
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
  },
  actions: {
    addCurrentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    showOrHiddenPopupWishList: (context) => {
      context.commit('SHOW_POPUP_WISH_LIST');
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
  },
  getters: {
    getAllProducts(state){
      return state.notebooks.concat(state.smartphones)
    },
    getCurrentProduct(state){
      return state.currentProduct
    },
    getProductsInCart(state) {
      return state.cartProducts
    },
    getPopupWishList(state){
      return state.showPopupWishList
    },
    getShowModal(state){
      return state.showModal
    },
  },
  modules: {
  },

})
