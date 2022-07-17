<template>
  <div id="nav">
    <router-link :to="{ name: 'catalog' }">Catalog</router-link> |
    <router-link :to="{ name: 'users' }">Usuarios</router-link>
  </div>
  

  <!-- <router-view v-slot="{ Component, route }">
    <keep-alive>
        <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view> -->

  <router-view />


</template>

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

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
