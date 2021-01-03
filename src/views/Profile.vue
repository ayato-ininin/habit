<template>
  <div class="profile">
    <Header></Header>
    <DesignCss2></DesignCss2>
    <h1>💫プロフィール変更💫</h1>
    <div class="content">
      <input type="text" v-model="name" placeholder="新しい名前">
      <button @click="edit">変更</button>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import DesignCss2 from '../components/DesignCss2'
import axios from 'axios'
export default {
  components:{
    Header,
    DesignCss2
  },
  data(){
    return{
      name:"",
    };
  },
  methods:{
    async edit(){
      if(this.name === ""){
        alert("変更内容を入力してください");
      }else{
        await axios.put('https://fathomless-springs-88074.herokuapp.com/api/users',{
          name:this.name,
          email:this.$store.state.user.email
        }).then((response)=>{
          this.$store.dispatch("changeUserData",{
            name:this.name,
          });
          console.log(response);
          alert("変更が完了しました");
          this.name="";
        this.$router.go({
          path:this.$router.currentRoute.path,
          force:true,
        });
        this.$router.push('/main');
        })
      }
    },
  }
}
</script>

<style scoped>
h1{
  font-size: 20px;
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