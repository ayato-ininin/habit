<template>
  <div class="habit">
    <DesignCss2></DesignCss2>
    <AddMaster></AddMaster>
    
    <div v-for="(value,index) in habits" :key="index">
      <div class="content">
        
        <ol>
          <li>{{value.item.habit}}
            <button @click="del(index)">削除</button>
          </li>
        </ol>
      </div>

    </div>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
import axios from "axios";
import AddMaster from '../components/AddMaster.vue';
import DesignCss2 from '../components/DesignCss2'
export default {
  components:{
    AddMaster,
    DesignCss2
  },
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
    }
    
  },
  created(){
    this.gethabits();
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
.content ol{
  display: list-item;
  list-style: decimal-leading-zero;
  margin: 20px 10px;
}
.content{
  text-align: center;
}
</style>