<template>
  <div id="app">
      <h2>#Todo</h2>
    <header>
      <nav>
        <router-link to="/">Todas</router-link>
        <router-link to="/imcompletas">Incompletas</router-link>
        <router-link to="/completas">Completadas</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

  import todas from "./components/todas.vue"

  export default {
    name: 'App',
    components: {
      todas
    }
  }
</script>

<style>

  *{
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 75%;
    margin: auto;
    margin-top: 80px;
    text-align: center;
  }

  #app > h2{
    font-size: 37px;
  }

  nav{
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    border-bottom: 2px solid #ccc;
    padding: 15px;
  }

  nav > a{
    text-decoration: none;
    color: #000;
  }

  nav > a:hover{
    color: #04f;
    border-bottom: 2px solid #04f;
  }

  nav > a:focus{
    color: #04f;
    border-bottom: 2px solid #04f;
  }

  button{
    outline: none;
  }

</style>
