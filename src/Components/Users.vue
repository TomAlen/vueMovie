<template>
    <div class="Users">
      <ul>
        <li v-for="users in users">{{users}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Users",
        data () {
           return {
             users : ['生狗',"志憋","张三"]
           }
        }
    }
</script>

<style scoped>

</style>
