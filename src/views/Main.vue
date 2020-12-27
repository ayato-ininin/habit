<template>
  <div class="habit">
    <h1>HABITY</h1>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 100px;
}
button{
  width: 70px;
  height: 30px;
  display: block;
  margin:0 auto;
  color: black;
  cursor: pointer;
}
</style>