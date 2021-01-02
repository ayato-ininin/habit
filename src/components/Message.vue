<template>
<div>
  <div v-for="(value,index) in habits" :key="index">
      <div class="content">
        
        <ol class="inside">
          <li>{{value.item.habit}}
            <button @click="del(index)">削除</button> 
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
  text-align: left;
  margin-left: 100vw;
}

.inside{
  list-style-position: inside;
  list-style-type: circle;
}
.register{
  color: aquamarine;
  margin-top: 5px;
  cursor: pointer;
}
</style>