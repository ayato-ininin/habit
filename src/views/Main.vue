<template>
  <div class="habit">
    <DesignCss2></DesignCss2>
    <Header></Header>
    <br><br>
     <Message></Message>
    <br>

 


  </div>
</template>

<script>
import DesignCss2 from '../components/DesignCss2'
import Message from '../components/Message'
import Header from '../components/Header'

export default {
  components:{
    DesignCss2,
    Message,
    Header
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