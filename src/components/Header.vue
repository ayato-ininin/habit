<template>
  <div class="headerauth">
     <div class="header flex">
        <div class="left-header">
        <h1>HABITY</h1>
       </div>
       <div class="right-header flex">
         <p @click="$router.push('/total')">概要</p>
          <p @click="$router.push('/main')">追加画面へ</p>
         <p @click="logout">logout</p>
         
       </div>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch('logout')
    },
  }
}
</script>

<style scoped>
h1{
  font-size: 90px;
  color: #add8e6;
  line-height: 130px;
  margin-left: 15px;
}
.flex{
  display: flex;
  justify-content: space-between;
}
p{
  cursor: pointer;
  color: white;
  line-height: 130px;
  font-size: 30px;
  font-weight: bold;
  margin-right: 15px;
}
.headerauth{
  height:130px
}

</style>