<template>
  <div class="hello">
    <header class="header">
      <button class="btn" style="margin-right:6.5%;">编辑</button>
    </header>
    <section class="section">
      <ul>
        <li v-for="(item,index) in list.top" :key="index" class="item">
          <div>
            <div>
              <h2 style="font-size:2vw;margin-bottom:2vh;color:rgb(74, 159, 112);font-weight:normal;">{{item.title}}</h2>
              <h3 style="font-size:1.7vw;color:#888;font-weight:normal;">{{item.content}}</h3>
              <h3 style="font-size:1.7vw;color:#888;font-weight:normal;">{{item.tips}}</h3>
            </div>
            <div :style="{visibility: index == 0 ? '' : 'hidden'}">
              <img src="../assets/pic.png" alt="" style="width:100%;height:100%;">
            </div>
          </div>
          <div>
            <button class="btn" :style="{visibility: index == 0 ? '' : 'hidden'}">编辑</button>
          </div>
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in list.bottom" :key="index" class="item">
          <div>
            <div>
              <h2 style="font-size:2vw;margin-bottom:2vh;color:rgb(74, 159, 112);font-weight:normal;">{{item.title}}</h2>
              <h3 style="font-size:1.7vw;color:#888;font-weight:normal;">{{item.content}}</h3>
              <h3 style="font-size:1.7vw;color:#888;font-weight:normal;">{{item.tips}}</h3>
            </div>
            <div :style="{visibility: index == 0 ? '' : 'hidden'}">
              <img src="../assets/pic.png" alt="" style="width:100%;height:100%;">
            </div>
          </div>
          <div>
            <button class="btn" :style="{visibility: index == 0 ? '' : 'hidden'}">编辑</button>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      list:{
        top:[
          {
            title:"春雨面膜十分好用春雨面膜十分好用春雨面膜十分好春雨",
            content:"您拍下的宝贝“良品铺子手剥松子120g休闲食品开口手拨松子新货坚果炒货”",
            tips:"已成功投保运费险"
          },
          {
            title:"春雨面膜十分好用春雨面膜十分好用春雨面膜十分好春雨",
            content:"您拍下的宝贝“良品铺子手剥松子120g休闲食品开口手拨松子新货坚果炒货”",
            tips:"已成功投保运费险"
          },{
            title:"春雨面膜十分好用春雨面膜十分好用春雨面膜十分好春雨",
            content:"您拍下的宝贝“良品铺子手剥松子120g休闲食品开口手拨松子新货坚果炒货”",
            tips:"已成功投保运费险"
          }
        ],
        bottom:[
          {
            title:"春雨面膜十分好用春雨面膜十分好用春雨面膜十分好春雨",
            content:"您拍下的宝贝“良品铺子手剥松子120g休闲食品开口手拨松子新货坚果炒货”",
            tips:"已成功投保运费险"
          },
          {
            title:"春雨面膜十分好用春雨面膜十分好用春雨面膜十分好春雨",
            content:"您拍下的宝贝“良品铺子手剥松子120g休闲食品开口手拨松子新货坚果炒货”",
            tips:"已成功投保运费险"
          },{
            title:"春雨面膜十分好用春雨面膜十分好用春雨面膜十分好春雨",
            content:"您拍下的宝贝“良品铺子手剥松子120g休闲食品开口手拨松子新货坚果炒货”",
            tips:"已成功投保运费险"
          }
        ]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  padding: 2vw;
  height: 100%;
}
.header {
  background: #f7f2f7;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 2%;
}
.btn {
  width: 10vw;
  height: 6.5vh;
  border: none;
  background: #ff9800;
  font-size: 2.4vh;
  min-width: 60px;
}
.section{
  padding-left: 2%;
  padding-right: 6.5%;
}
.section>ul{
  border-top:solid 1px #BBBBBB;
}
.item{
  padding: 5vh 0 0 0;
  display: flex;
  justify-content: space-between;
}
.item>div:nth-child(1){
  flex: 1;
  padding-bottom: 6vh;
  height: 15vh;
  margin-right: 10vh;
  border-bottom:solid 1px #BBBBBB;
  display: flex;
  justify-content: space-between;
}
.item:nth-last-of-type(1)>div:nth-child(1){
  border-bottom:none;
}
.item>div:nth-child(1)>div:nth-child(2){
  width: 13vw;
  height: 14vh;
  background: greenyellow;
  
}

</style>
