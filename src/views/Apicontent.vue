<template>
<div>
  <DesignCss></DesignCss>
           <div id="overlay" >
           <div id="contents">
             <h3>💫習慣の効果💫</h3>
             <br>
             <h4>まず、あなたは習慣にしようと思って失敗した経験はないですか？？<br><br>僕は早起きしよう！って思っても３日でやめました。😭<br><br>一回起きれない日があると、もうダメだ、、となってしまい、続けれないのです！🙅‍♂️<br><br>そこで僕が習慣を実行しながらこのアプリを作成しました。<br><br>習慣化アプリは世の中にたくさんあります。ですが、どれもできたかできてないか。その二択です。<br>つまり、出来なければ、もうダメ。という認識になっており、それが人の習慣化を妨げていると思います。😩<br><br>なので今回、できたかどうかではなく、何点満点でらどこまでできたのか、というのを記録するアプリを作りました！🔥<br><br>これを使い、毎日、小さなことでも、少しでいいからやってみて下さい。<br>福利の効果はすごいです。のちのちあなたの大きな資産になります。<br><br>少しでいい、でも毎日続けてほしい。<br>そんな思いで作っています。☺️<br><br>最後に名言を。<br><br>「心が変われば行動が変わる 行動が変われば習慣が変わる 習慣が変われば人格が変わる 人格が変われば運命が変わる」 <br><br>by William James <br><br>習慣で人は変われると、心から信じています。<br></h4><br>
             <button @click="$router.push('/main')">習慣登録へ</button>
           </div>
         </div>
</div>
</template>

<script>
import DesignCss from '../components/DesignCss';
export default {
  components:{
    DesignCss
  },
}
</script>



<style scoped>
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
  margin: 0 auto;
}

@media screen and (max-width: 768px){
  #contents{
    width: 80%;
    height: 80%;
    font-size: 12px;

  }
  
}
</style>