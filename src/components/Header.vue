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
             <h3>💫習慣の効果💫</h3>
             <br>
             <h4>まず、あなたは習慣にしようと思って失敗した経験はないですか？？<br><br>僕は早起きしよう！って思っても３日でやめました。😭<br><br>一回起きれない日があると、もうダメだ、、となってしまい、続けれないのです！🙅‍♂️<br><br>そこで僕が習慣を実行しながらこのアプリを作成しました。<br><br>習慣化アプリは世の中にたくさんあります。ですが、どれもできたかできてないか。その二択です。<br>つまり、出来なければ、もうダメ。という認識になっており、それが人の習慣化を妨げていると思います。😩<br><br>なので今回、できたかどうかではなく、何点満点でらどこまでできたのか、というのを記録するアプリを作りました！🔥<br><br>これを使い、毎日、小さなことでも、少しでいいからやってみて下さい。<br>福利の効果はすごいです。のちのちあなたの大きな資産になります。<br><br>少しでいい、でも毎日続けてほしい。<br>そんな思いで作っています。☺️<br><br>最後に名言を。<br><br>「心が変われば行動が変わる 行動が変われば習慣が変わる 習慣が変われば人格が変わる 人格が変われば運命が変わる」 <br><br>by William James <br><br>習慣で人は変われると、心から信じています。<br></h4>
             <button @click="closemodal">習慣へ</button>
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
#contents {
  text-align: left;
  z-index: 2;
  width: 65%;
  padding: 10px;
  background:#fffafa;
}
h3{
  font-size: 20px;
}
button{
  cursor: pointer;
}
</style>