<template>
<div id="add">
  <div class="title">
  <h1>HABITY</h1>
  </div>
  <br>
  <div class="content">
    <input type="text" v-model="common">
    <button @click="send">習慣を追加</button>
    </div>
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
          path:this.$router.currentRoute.path,
          force:true,
        });
      });
      }
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
.title{
  height: 130px;
}
button{
  cursor: pointer;
}
button:hover{
  background-color:#afeeee ;
  color: white;
  border: none;
}
.content{
  text-align: center;
  margin: 10px 0;
}
</style>