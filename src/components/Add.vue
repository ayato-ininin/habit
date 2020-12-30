<template>
<div id="add">
  <h1>HABITY</h1>
  <br>
    <input type="text" v-model="common">
    <button @click="send">習慣を追加</button>
</div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      common:""
    }
  },
  methods:{
    async send(){
      if(this.common===""){
        alert("習慣を入れてください");
      }else{
        await axios.post('https://fathomless-springs-88074.herokuapp.com/api/habits',{
        user_id:this.$store.state.user.id,
        habit:this.common,
      }).then((response)=>{
        console.log(response);
        alert("習慣を追加しました");
        this.common="";
        this.$router.go({
          path:this.$router.curretntRoute.path,
          force:true,
        });
      });
      }
    }
  }

  
}
</script>