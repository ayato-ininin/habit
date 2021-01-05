<template>
  <div class="habit">
    <v-app>
    <DesignCss2></DesignCss2>
    <Header></Header>
    <br><br>
     <Message v-show="!loading"></Message>
     <Loading v-show="loading"></Loading>
    <br>
    </v-app>

 


  </div>
</template>

<script>
import DesignCss2 from '../components/DesignCss2'
import Message from '../components/Message'
import Header from '../components/Header'
import Loading from '../components/Loading'
export default {
  components:{
    DesignCss2,
    Message,
    Header,
    Loading
  },
  data(){
    return{
      loading:true,
    }
  },
    mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  
  
  
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