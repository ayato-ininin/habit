<template>
  <div class="headerauth">
     <div class="header flex">
        <div class="left-header">
        <h1>HABITY</h1>
       </div>
       <div class="right-header flex">
         <p @click="openmodal">アプリ概要</p>

         <div id="overlay" v-if="show">
           <div id="contents">
             <h3>💫習慣の効果💫</h3>
             <br>
             <h4>まず、あなたは習慣にしようと思って失敗した経験はないですか？？<br><br>僕は早起きしよう！って思っても３日でやめました。😭<br><br>一回起きれない日があると、もうダメだ、、となってしまい、続けれないのです！🙅‍♂️<br><br>そこで僕が習慣を実行しながらこのアプリを作成しました。<br><br>習慣化アプリは世の中にたくさんあります。ですが、どれもできたかできてないか。その二択です。<br>つまり、出来なければ、もうダメ。という認識になっており、それが人の習慣化を妨げていると思います。😩<br><br>なので今回、できたかどうかではなく、何点満点でらどこまでできたのか、というのを記録するアプリを作りました！🔥<br><br>これを使い、毎日、小さなことでも、少しでいいからやってみて下さい。<br>福利の効果はすごいです。のちのちあなたの大きな資産になります。<br><br>少しでいい、でも毎日続けてほしい。<br>そんな思いで作っています。☺️<br><br>最後に名言を。<br><br>「心が変われば行動が変わる 行動が変われば習慣が変わる 習慣が変われば人格が変わる 人格が変われば運命が変わる」 <br><br>by William James <br><br>習慣で人は変われると、心から信じています。<br></h4><br>
             <button @click="closemodal">習慣登録へ</button>
           </div>
         </div>
          <p @click="$router.push('/profile')">プロフィール変更</p>
          <p @click="$router.push('/main')">追加画面へ</p>
         <p @click="logout">logout</p>
         
       </div>
<!-- ハンバーガーメニュー -->
       <div id="hamburger" @click="hamburger" :class="{active:isclass}">
         
      <span class="header__menu__line"></span>
      <span class="header__menu__line"></span>
      <span class="header__menu__line"></span>
       </div>
      <div class="contentnav">
       <nav class="menu-content" :class="{'open':isclass}">
         <p class="menu-title">Habity</p>
      <ul class="menu-content_innner">
        <li><span>
          <a @click="openmodal">アプリ概要</a>
           </span>
        </li>
        <li><span>
          <a @click="$router.push('/profile')">プロフィール変更</a>
           </span>
        </li>
        <li><span>
          <a @click="$router.push('/main')">追加画面へ</a>
           </span>
        </li>
        <li><span>
          <a @click="logout">logout</a>
           </span>
        </li>
      </ul>
       </nav>
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
    } ,
    hamburger(){
      this.isclass= !this.isclass;
    }
   },
  data(){
    return{
      show:false,
      isclass:false
    };
  },
  
};
</script>

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
  color:#4169e1;
  line-height: 130px;
  font-size: 15px;
  font-weight: bold;
  margin-right: 10px;
  text-decoration: none;
  padding: 0 auto;
}
.headerauth{
  height:130px
}
p:hover{
text-decoration: underline;
font-weight: bold;
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
  background-color: rgba(255, 235, 205, 0.9);
}
h3{
  font-size: 20px;
}
#contents button{
  cursor: pointer;
  text-align: center;
}



/* ハンバーガー用 */
@media screen and (max-width: 768px){
  #hamburger{
    width: 60px;
    height: 60px;
    position: absolute;
    cursor: pointer;
    z-index: 100;
    top: 15px;
    right: 20px;
    transition: 0.4s;
  }
  #hamburger span{
    position: absolute;
    left: 2px;
    display: block;
    width: 35px;
    height: 2px;
    background-color: fff;
    transition: 0.8s;
  }
    #hamburger span:nth-of-type(1) {
    top: 10px;
  }
  #hamburger span:nth-of-type(2) {
    top: 20px;
  }
  #hamburger span:nth-of-type(3) {
    top: 30px;
  }

  .contentnav{
    display: none;
  }
    #hamburger.active span:nth-of-type(1) {
    top: 20px;
    transform: rotate(45deg);
  }
#hamburger.active span:nth-of-type(2) {
    opacity: 0;
  }
  #hamburger.active span:nth-of-type(3) {
    top: 20px;
    transform: rotate(-45deg);
  }
  .menu-content {
    display: block;
    width: calc(100% - 80px);
    height: 100%;
    text-align: center;
    transition: 0.2s;
    position: fixed;
    top: 0;
    left: calc(-100% - 80px);
    background: #fff;
    color: #333333;
    box-shadow: 80px 0 rgba(38, 98, 213, 0.3);
    z-index: 999;
  }
  .menu-content .menu-title {
    margin: 40px 20px;
    font-size: 2.2rem;
    color: #333333;
    text-align: left;
    font-weight: bold;
  }
  .menu-content li a {
    color: #333333;
    margin: 15px;
    padding: 5px;
    border-bottom: 0.5px solid #2662d5;
    text-decoration: none;
    display: block;
  }
  .menu-content li {
    width: 100%;
    text-align: left;
  }
  .menu-content.open {
    left: 0;
  }
}
</style>