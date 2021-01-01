<template>
  <div class="detail">
    <DesignCss2></DesignCss2>
    <h1>HABITY</h1>
    <Message :id="id"/>
  </div>
</template>

<script>
import DesignCss2 from '../components/DesignCss2';
import Message from '../components/Message'

export default {
  props:['id'],
  components:{
    DesignCss2,
    Message
   
  },
  data(){
    return{
      contain:"",
      point:"",
    }
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
</style>