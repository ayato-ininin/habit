<template>
  <div class="habit">
    <DesignCss></DesignCss>
    <HeaderAuth></HeaderAuth>

  <div class="content">
      <h2>新規登録</h2>
      <div class="card">
        <form>
        <input type="text" placeholder="ユーザーネーム" v-model="name">
        <input type="email" placeholder="メールアドレス" v-model="email">
        <input type="password" placeholder="パスワード" v-model="password">
        </form>
        <button @click="send">送信</button>
      </div>
  </div>

  </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth';
import DesignCss from '../components/DesignCss';
import axios from "axios";
export default {
  data(){
    return{
      name:"",
      email:"",
      password:""
    };
  },
  methods:{
    async send(){
      await axios.post('https://fathomless-springs-88074.herokuapp.com/api/register',{
        name:this.name,
        email:this.email,
        password:this.password
      })
      .then((response)=>{
        // eslint-disable-next-line no-console
        console.log(response);
        this.$router.replace("/");
      })
      .catch(error=>{
        alert(error);
      });
      
      }
    },
  
  components:{
    HeaderAuth,
    DesignCss
  }
};
</script>

<style scoped>
.content{
  color: white;
  width: 50%;
  border:3px solid white;
  text-align: center;
  margin: 0 auto;
  height: 300px;
  margin-top: 100px;
  
}
input{
  width: 60%;
  margin:15px 0;
}
button{
  width: 70px;
  height: 30px;
  display: block;
  margin:0 auto;
  color: black;
  cursor: pointer;
}
h2{
  font-size:20px;
}
button:hover{
  background-color:#afeeee ;
  color: white;
  border: none;
}
</style>