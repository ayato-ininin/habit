<template>
  <div class="headerauth">
     <div class="header flex">
        <div class="left-header">
        <h1>HABITY</h1>
       </div>
       <div class="right-header flex">
         <p @click="$router.push('/apicontent')">アプリ概要</p>

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
        <li>
          <a @click="$router.push('/apicontent')">アプリ概要</a>
           
        </li>
        <li>
          <a @click="$router.push('/profile')">プロフィール変更</a>
        </li>
        <li>
         <a @click="$router.push('/main')">追加画面へ</a>
        </li>
        <li>
        <a @click="logout">ログアウト</a>
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
  z-index: 100;
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
  h1{
    font-size: 50px;
  }
  #hamburger{
    width: 40px;
    height: 40px;
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
    top:12px;
    display: block;
    width: 23px;
    height: 2px;
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
      transform: skew(90deg);
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
  .menu-content ul{
     align-content: space-around;
     text-align: center;
  }
  .menu-content_inner li{
     align-content: space-around;
     text-align: center;
  }
  .menu-content_inner a{
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
  
  .menu-content.open {
    left: 0;
  }
}
</style>