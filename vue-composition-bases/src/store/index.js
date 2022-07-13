import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'One', completed: false },
      { id: 2, text: 'Two', completed: true },
      { id: 3, text: 'Three', completed: true },
      { id: 4, text: 'Four', completed: true },
      { id: 5, text: 'Five', completed: false }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    pendingTodos(state, getters, rootState){
      return state.todos.filter( todo => !todo.completed )
    },
    All(state, getters, rootState){
      return state.todos
    },
    completedTodos(state, getters, rootState){
      return state.todos.filter( todo => todo.completed )
    },
    getAllByTab: ( _, getters ) => ( tab ) => {
      switch (tab) {
        case 'all': return getters.All
        case 'pending': return getters.pendingTodos
        case 'completed': return getters.completedTodos  
      }
    }
  },
  modules: {
  }
})
