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
         <p @click="logout">ログアウト</p>
         
       </div>
<!-- ハンバーガーメニュー -->
       <div id="hamburger" @click="hamburger" :class="{'active':isclass}">
         
      <span :class="{'header__menu__line':isclass}"></span>
      <span :class="{'header__menu__line':isclass}"></span>
      <span :class="{'header__menu__line':isclass}"></span>
       </div>
     <div class="contentnav">
     <nav class="menu-content" :class="{'open':isclass}" v-show="isclass">
      <ul class="menu-content_inner">
        <li><span>
          <h4><a @click="openmodal">アプリ概要</a></h4>
           </span>
        </li>
        <li><span>
          <h4><a @click="$router.push('/profile')">プロフィール変更</a></h4>
           </span>
        </li>
        <li><span>
          <h4><a @click="$router.push('/main')">追加画面へ</a></h4>
           </span>
        </li>
        <li><span>
          <h4><a @click="logout">ログアウト</a></h4>
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
    width: 50px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    z-index: 100;
    top: 20px;
    right: 20px;
    transition: 0.4s;
    background-color: #4169e1;
  }
  #hamburger span{
    position: absolute;
    left: 8px;
    top:18px;
    display: block;
    width: 35px;
    height: 3px;
    background-color:white;
    transition: 0.8s;
    transform: skew(0deg);
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

  .right-header{
    display: none;
  }
  #hamburger:hover span{
      opacity: 0.6;
      transform: skew(70deg);
    }
  .menu-content {
    display: block;
    width: calc(100% - 90px);
    height: 100%;
    text-align: center;
    transition: 0.2s;
    position: fixed;
    top: 0;
    left: calc(-100% - 90px);
    background: white;
    color: #333333;
    box-shadow: 90px 0 rgba(38, 98, 213, 0.3);
    z-index: 999;
    overflow-x: hidden;
  }

  .menu-content li a {
    margin: 20px;
    padding: 20px;
    cursor: pointer;
    text-decoration: none;
    display: block;
    color:  #87cefa;
    transition: 0.3s;
     align-content: space-around;
  }
  .menu-content li a:hover{
    color: #2662d5;
  }
  .menu-content li {
    width: 80%;
    text-align: center;
    
  }
  .menu-content_inner li{
     align-content: space-around;
     text-align: center;
  }
  .menu-content_inner a{
    padding: 20px 20px 20px 20px;
  border:1px solid #2662d5;
  border-radius:10px;
  /* ボーダーにradiusで丸みをつける */
  transform:rotate(0deg) translate(0px,0px);
  /* Z軸(平面)の回転角度とXY軸の移動距離を指定 */

  }
  .menu-content_inner a:hover{
    transform:rotate(-3deg) translate(3px,5px);
  /* Z軸(平面)の回転角度とXY軸の移動距離を指定 */
   color: #2662d5;
  }
  .sidenavs h4 {
  margin:0 auto;
  width:200px;
  border:1px solid #2662d5;
 
  /* ボーダーにradiusで丸みをつける */
}
  .menu-content.open {
    left: 0;
  }
}
</style>