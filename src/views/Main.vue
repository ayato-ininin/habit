<template>
  <div class="habit">
    <Add></Add>
    
    <div v-for="(value,index) in habits" :key="index">
      <div id="content">
        
        <ul>
          <li>{{value.item.habit}}
            <button @click="del">削除</button>
          </li>
        </ul>
      </div>

    </div>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
import axios from "axios";
import Add from '../components/Add.vue';
export default {
  data(){
    return{
      habits:[],
    };
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
    },
    del(index){
      axios.delete("https://fathomless-springs-88074.herokuapp.com/api/habits/" +this.habits[index].item.id)
      .then((response)=>{
        console.log(response);
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
    }
    
  },
  created(){
    this.gethabits();
  },
}
</script>

<style scoped>
h1{
  font-size: 80px;
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