<template>

  <div class="habit">
    <DesignCss></DesignCss>
    <HeaderAuth></HeaderAuth>

    <div class="content">
      <h2>ログイン</h2>
      <div class="card">
        <form>
        <input type="text" placeholder="ユーザーネーム" v-model="name">
        <input type="password" placeholder="パスワード" v-model="password">
        </form>
        <button @click="auth">送信</button>
      </div>
    </div>


  </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth';
import DesignCss from '../components/DesignCss';
export default{
  components:{
    HeaderAuth,
    DesignCss
  },
  data(){
    return{
      name:"",
      password:""
    };
  },
  methods:{
    auth(){
      this.$store.dispatch("login",{
        name:this.name,
        password:this.password
      });
    }
  }
};
</script>

<style scoped>
.flex{
  display: flex;
  justify-content: space-between;
}
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