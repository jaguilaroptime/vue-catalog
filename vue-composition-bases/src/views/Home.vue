<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    <h3>Ironman: {{ ironmanIsAlive }}</h3>
    <h3>Hulk: {{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Cambiar status</button>

    <h4>Pendientes: {{ pending.length }}</h4>
    <hr>
    <button 
      :class="{ 'active': currentTab === 'all' }"
      @click="currentTab = 'all'"
    >All</button>
    <button 
      :class="{ 'active': currentTab === 'pending' }"
      @click="currentTab = 'pending'"
      >Pending</button>
    <button 
      :class="{ 'active': currentTab === 'completed' }"
      @click="currentTab = 'completed'"
      >Completed</button>

      <div>
        <ul>
          <li 
            v-for="todo in getAllByTab" :key="todo.id"
            :class="{ 'completed': todo.completed }"
          >{{ todo.text }}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',

  setup() {
    const store = useStore()
    const currentTab = ref('all')

    const ironman = ref({ name: 'Tony', age: 50 })
    const hulk = reactive({ name: 'Bruce', age: 50 })

    const ironmanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      // ironmanIsAlive = reactive(!ironmanIsAlive)
    }


    return {
      currentTab,
      ironman, 
      hulk,

      ironmanIsAlive,
      hulkIsAlive,

      changeStatus,
      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
        ironman.value.age  = 55
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 45
      },
      pending: computed(() => store.getters['pendingTodos']),
      all: computed(() => store.getters['All']),
      completed: computed(() => store.getters['completedAll']),
      getAllByTab: computed( () => store.getters['getAllByTab'](currentTab.value))
    }
  }
}
</script>
