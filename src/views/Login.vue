<template>

  <div class="habit">

    <HeaderAuth></HeaderAuth>

    <div class="content">
      <h2>ログイン</h2>
      <div class="card">
        <input type="text" placeholder="ユーザーネーム">
        <input type="password" placeholder="パスワード">
      </div>
    </div>


  </div>
</template>

<script>
import HeaderAuth from '../components/HeaderAuth'
export default{
  components:{
    HeaderAuth
  }
}
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
</style>