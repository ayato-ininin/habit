<template>
<div class="detail">
    <DesignCss2></DesignCss2>
    <Header></Header>
    <br><br>
  <div class="center">
    <div id="element">
      <h2 v-for="(items,index) in habits" :key="index">{{items.item.habit}}</h2>
      <br>
      <p>今日もお疲れさまです！</p>
      <br><br>
      <input type="number" v-model="point" placeholder="点" class="number">/100
      <br><br>
      <textarea v-model="contain" placeholder="今日の一言メモ..."></textarea>
    </div>

    <br><br><br>

    <button @click="send">保存</button>
    <br><br>

    <div class="path">
      <div class="datacontent" v-for="(values,index) in data" :key="index">
        <p>日付/時間：{{values.content.created_at}}</p>
        <br>
        <p>点数：{{values.content.point}}点</p>
        <br>
        <p class="textcontent">メモ：{{values.content.contain}}</p>
        <br><br>
        
      </div>
      
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
  height: 80px;
  width: 200px;
}
h2{
  font-size: 30px;
  text-decoration: underline;
}
.center{
  text-align: center;
}
.textcontent{
  border: 1px solid blueviolet;
  width: 30%;
}
.number{
  width: 30px;
}
.detail{
  text-align: center;
}
.path{
  text-align:center;
  display: block;
}
.datacontent{
 
  display: inline-block;
}
.datacontent p{
  text-align: left;
}

</style>