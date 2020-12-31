<template>
  <div class="headerauth">
     <div class="header flex">
        <div class="left-header">
        <h1>HABITY</h1>
       </div>
       <div class="right-header flex">
          <p @click="$router.push('/signup')">新規登録</p>
         <p @click="$router.push('/main')">ログイン</p>
       </div>
      </div>
    </div>
</template>

<style scoped>
h1{
  font-size: 80px;
  color: white;
}
.flex{
  display: flex;
  justify-content: space-between;
}
p{
  cursor: pointer;
  color: white;
  line-height: 100px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
}
.headerauth{
  height:100px
}
</style>