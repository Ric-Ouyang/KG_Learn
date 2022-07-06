<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from './views/Login.vue'
  // @ is an alias to /src
  export default {
    name: 'App',
    components: {
      Login
    }
  };
</script>
<style>
    html, body {
      margin: 0;
      padding: 0;
    }
    #app {
      height: 100vh;
      background-image: url("./assets/cool-background.png");
    }
</style>
