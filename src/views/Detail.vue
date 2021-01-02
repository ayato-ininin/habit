<template>
  <div class="detail">
    <DesignCss2></DesignCss2>
    <h1>HABITY</h1>
    <br><br>
    <div id="element">
      <p v-for="(items,index) in habits" :key="index">{{items.item.habit}}</p>
      <input type="number" v-model="point">/100
      <textarea v-model="contain"></textarea>
    </div>

    <br><br><br>

    <button @click="send">保存</button>

    <div class="path">
      <div v-for="(values,index) in data" :key="index">
        <p>{{values.content.point}}</p>
        <p>{{value.content.contain}}</p>
      </div>
      
    </div>
  </div>
</template>

<script>
import DesignCss2 from '../components/DesignCss2';
import axios from "axios";

export default {
  props:["id"],
  components:{
    DesignCss2
   
  },
  data(){
    return{
      contain:"",
      point:"",
      data:[],
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
      let data2=[];
      const habit = await axios.get("https://fathomless-springs-88074.herokuapp.com/api/habits/" +this.id)
      
        for(let i=0 ; i<habit.data[0].content.data.length; i++){
          let contena=habit.data[0].content.data[i];
          data2.push(contena.data)
        }
        this.data=data2;
        console.log(this.data);
        // eslint-disable-line no-console
      
    },
  },
  created(){
    this.gethabits();
    this.reload();
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
button{
  cursor: pointer;
}
button:hover{
  background-color:#afeeee ;
  color: white;
  border: none;
}
</style>