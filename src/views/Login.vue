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