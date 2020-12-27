<template>

  <div class="habit">

    <HeaderAuth></HeaderAuth>

    <div class="content">
      <h2>ログイン</h2>
      <div class="card">
        <input type="text" placeholder="ユーザーネーム" v-model="name">
        <input type="password" placeholder="パスワード" v-model="password">
        <button @click="auth">送信</button>
      </div>
    </div>


  </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth'
export default{
  components:{
    HeaderAuth
  },
  data(){
    return{
      name:"",
      password:""
    };
  },
  methods:{
    auth(){
      this.$store.dispatch('Login',{
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
  width: 50%;
  border:1px solid black;
  text-align: center;
  margin: 0 auto;
  height: 150px;
}
input{
  width: 80%;
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