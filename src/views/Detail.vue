<template>
  <div class="detail">
    <DesignCss2></DesignCss2>
    <Header></Header>
    <br><br>
    <div id="element">
      <h2 v-for="(items,index) in habits" :key="index">☆{{items.item.habit}}</h2>
      <br>
      <p>今日もお疲れさまです！</p>
      <input type="number" v-model="point" placeholder="今日の点数">/100
      <br>
      <textarea v-model="contain" placeholder="今日の一言メモ..."></textarea>
    </div>

    <br><br><br>

    <button @click="send">保存</button>
    <br><br>

    <div class="path">
      <div v-for="(values,index) in data" :key="index">
        <p>{{values.content.point}}</p>
        <p>{{values.content.contain}}</p>
        <p>{{values.content.created_at}}</p>
      </div>
      
    </div>
  </div>
</template>

<script>
import DesignCss2 from '../components/DesignCss2';
import axios from "axios";
import Header from '../components/Header'

export default {
  props:["id"],
  components:{
    DesignCss2,
    Header
   
  },
  data(){
    return{
      contain:"",
      point:"",
      data:"",
      habits:[],
    }
  },
  methods:{
    async gethabits(){
      let data=[];
 
      await axios.get("https://fathomless-springs-88074.herokuapp.com/api/habits/" +this.id)
      .then((response)=>{
        data.push(response.data);
      });
      this.habits=data;
      console.log(this.habits);
      // eslint-disable-line no-console

    },
    send(){
      axios.post("https://fathomless-springs-88074.herokuapp.com/api/contain",{
        habit_id:this.id,
        user_id:this.$store.state.user.id,
        contain:this.contain,
        point:this.point
      })
      .then((response)=>{
        console.log(response);
        // eslint-disable-line no-console
        alert("保存しました");
        this.contain="";
        this.number="";
        this.$router.go({
          path:this.$router.currentRoute.path,
          force:true,
        });
      });
    },
    async reload(){
      await axios.get("https://fathomless-springs-88074.herokuapp.com/api/habits/" +this.id)
      .then((response)=>{
        this.data=response.data.content;
      });
      
    },
  },
  created(){
    this.gethabits();
    this.reload();
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
textarea{
  height: 50px;
  width: 100px;
}
h2{
  font-size: 30px;
}
</style>