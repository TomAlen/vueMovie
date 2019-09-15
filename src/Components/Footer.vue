<template>
  <footer>
    <p>{{CopyRight}}</p>
  </footer>
</template>

<script>
    export default {
        name: "app-footer",
        data(){
          return {
            CopyRight:'CopyRight 2019 By TomAlen'
          }
        }
    }
</script>

<style scoped>

  footer{
    background: #222;
    padding: 3px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }


</style>
