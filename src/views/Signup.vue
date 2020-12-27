<template>
  <div class="habit">

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

export default {
  data(){
    return{
      name:"",
      email:"",
      password:""
    };
  },
  methods:{
    send(){
      this.$router.push('/main')
      
      }
    },
  
  components:{
    HeaderAuth
  }
}
</script>

<style scoped>
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