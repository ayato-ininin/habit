<template>
  <div class="headerauth">
     <div class="header flex">
        <div class="left-header">
        <h1>HABITY</h1>
       </div>
       <div class="right-header flex">
         <p @click="openmodal">概要</p>

         <div id="overlay" v-if="show">
           <div id="contents">
             <h3>あああああああああああ<br>あああああああああああああああ<br>ああああああああああああああ</h3>
             <button @click="closemodal">閉じる</button>
           </div>
         </div>

          <p @click="$router.push('/main')">追加画面へ</p>
         <p @click="logout">logout</p>
         
       </div>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch('logout')
    },
    openmodal(){
      this.show=true;
    },
    closemodal(){
      this.show=false;
    } 
   },
  data(){
    return{
      show:false
    };
  }
}
</script>

<style scoped>
h1{
  font-size: 90px;
  color: #add8e6;
  line-height: 130px;
  margin-left: 15px;
}
.flex{
  display: flex;
  justify-content: space-between;
}
p{
  cursor: pointer;
  color: white;
  line-height: 130px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  text-decoration: underline;
  padding: 0 auto;
}
.headerauth{
  height:130px
}
p:hover{
text-decoration: none;
color: blue;
}
#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#content {
  text-align: center;
  z-index: 2;
  width: 30%;
  padding: 10px;
  background: #fff;
}
</style>