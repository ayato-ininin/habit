<template>
  <div class="headerauth">
     <div class="header flex">
        <div class="left-header">
        <h1>HABITY</h1>
       </div>
       <div class="right-header flex">
          <p @click="$router.push('/signup')">新規登録</p>
a         <p @click="$router.push('/main')">ログイン</p>
       </div>
      </div>
    </div>
</template>

<style scoped>
.flex{
  display: flex;
  justify-content: space-between;
}
p{
  cursor: pointer;
}
</style>