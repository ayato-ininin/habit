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
      data:"",
      habits:[]
    }
  },
  methods:{
    async gethabits(){
      let data=[];
 
      await axios.get(" https://fathomless-springs-88074.herokuapp.com/api/habits/" +this.id)
      .then((response)=>{
        data.push(response.data);
      });
      this.habits=data;
      console.log(this.habits);
      // eslint-disable-line no-console

    }
  },
  created(){
    this.gethabits();
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