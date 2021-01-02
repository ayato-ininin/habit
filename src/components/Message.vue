<template>
<div class="message">
  <div v-for="(value,index) in habits" :key="index">
      <div class="content">
        <h1>
          ☆毎日できる習慣に！
        </h1>
        <ol class="inside">
          <li>
            <p class="main">
            {{value.item.habit}}
            </p>
            <button @click="del(index)">削除</button> 
            <br>
            <p class="register" @click="$router.push({
            path:'/detail/' +value.item.id,
             params:{id:value.item.id},
             })">今日の記録へ▷</p>      
          </li>
        </ol>
      </div>

    </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      habits:[],
    };
  },
  methods:{
    del(index){
      axios.delete("https://fathomless-springs-88074.herokuapp.com/api/habits/" + this.habits[index].item.id)
      .then((response)=>{
        console.log(response);
        // eslint-disable-line no-console
        this.$router.go({
          path:this.$router.currentRoute.path,
          force:true,
        });
      });
    },
    async gethabits(){
      let data=[];
      const habits =await axios.get(
       " https://fathomless-springs-88074.herokuapp.com/api/habits"
      );
      for (let i=0; i<habits.data.data.length;i++){
        await axios
        .get("https://fathomless-springs-88074.herokuapp.com/api/habits/" + habits.data.data[i].id)
        .then((response)=>{
          data.push(response.data);
        
        });
      }
      this.habits=data;
      console.log(this.habits);
      // eslint-disable-line no-console
    },
  }
  ,
  created(){
    this.gethabits();
  },
  
}
</script>

<style scoped>
h1{
  font-size: 20px;
}
button{
  cursor: pointer;
  margin-left: 15px;
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
  display: block;
  
}

.inside ol li{
  list-style-position: inside;
  list-style-type: circle;
}

.register{
  color: aquamarine;
  margin-top: 5px;
  cursor: pointer;
}
.register:hover{
  text-decoration: underline;
}
p{
  font-size: 20px;
}
.content li{
  
  display: inline-block;
  list-style-type: circle;
}
.content ol li p{
  text-align: left;
}


</style>