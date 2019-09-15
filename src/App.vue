<template>
  <div id="app">
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Users from "./Components/Users";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    "users" : Users,
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<style>
#app {

}
</style>
