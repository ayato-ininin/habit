<template>
  <div class="habit">

    <HeaderAuth></HeaderAuth>

  <div class="content">
      <h2>新規登録</h2>
      <div class="card">
        <input type="text" placeholder="ユーザーネーム">
        <input type="email" placeholder="メールアドレス">
        <input type="password" placeholder="パスワード">
      </div>
  </div>

  </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth'
export default {
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
</style>