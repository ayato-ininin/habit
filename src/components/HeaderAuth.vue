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
  font-size: 90px;
  color: #4169e1;
  line-height: 130px;
  margin-left: 15px;
}
.flex{
  display: flex;
  justify-content: space-between;
}
p{
  cursor: pointer;
  color: #4169e1;
  line-height: 130px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 15px;
}
.headerauth{
  height:130px
}

@media screen and (max-width: 768px){
  h1{
    font-size: 40px;
  }
  p{
    font-size: 25px;
  }
}

</style>