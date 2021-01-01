<template>
  <div class="habit">
    <DesignCss2></DesignCss2>
    <AddMaster></AddMaster>
    <br>
  <Message></Message>

    <div class="logout">
      <button @click="logout">logout</button>
    </div>

  </div>
</template>

<script>
import AddMaster from '../components/AddMaster.vue';
import DesignCss2 from '../components/DesignCss2'
import Message from '../components/Message'

export default {
  components:{
    AddMaster,
    DesignCss2,
    Message
  },
  
  
  methods:{
    logout(){
      this.$store.dispatch('logout')
    },
    
}
}
</script>

<style scoped>


button{
  cursor: pointer;
}
button:hover{
  background-color:#afeeee ;
  color: white;
  border: none;
}
.content li{
  
  margin: 20px 10px;
}
.content{
  text-align: center;
}
.logout{
  text-align: center;
  margin-top: 20px;
}
.inside{
  list-style-position: inside;
  list-style-type: circle;
}
</style>