<template>
  <div class="hello">
    <header class="header">
      <button class="btn" style="margin-right:.5rem;" @click="getContent">刷新</button>
    </header>
    <section class="section wrapper" ref="wrapper">
      <div class="content">
        <ul v-if="showList">
          <li class="item" @click="pushOther(showList.sourceLink)">
            <div>
              <div>
                <h2
                  class="h2-c"
                  style="font-size:.3rem;margin-bottom:.2rem;color:rgb(74, 159, 112);font-weight:normal;"
                >{{showList.title}}</h2>
                <h3
                  style="font-size:.25rem;color:#888;font-weight:normal;"
                >{{showList.briefIntroduction}}</h3>
                <!-- <h3 style="font-size:.25rem;color:#888;font-weight:normal;">{{item.tips}}</h3> -->
              </div>
              <div>
                <img :src="showList.imgLink" alt style="width:100%;">
              </div>
            </div>
            <!-- <div :style="{visibility: index == 0 ? '' : 'hidden'}">
              <button class="btn">编辑</button>
            </div>-->
          </li>
        </ul>
        <div v-else style="width:100%;height:2rem;font-size:.3rem;">没有更多了</div>
      </div>
    </section>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      showList: null
    };
  },
  methods: {
    getContent() {
      axios.get("/api/article/getRecentValidArticle").then(res => {
        console.log(res);
        this.showList=res.data.data;
        console.log(this.showList);
      });
    },
    pushOther(url){
      window.open(url);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        mouseWheel: true
      });
    });
  },
  created() {
    this.getContent();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  /* padding: 2vw; */
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  background: #f7f2f7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 1160px;
  height: 0.8rem;
  position: fixed;
}
.btn {
  width: 0.8rem;
  height: 0.4rem;
  border: none;
  background: #ff9800;
  font-size: 0.2rem;
  /* min-width: 60px; */
}
.section {
  margin-top: 1rem;
  padding-left: 0.15rem;
  padding-right: 0.5rem;
  width: 100%;
  height: calc(100% - 1rem);
  overflow: hidden;
}
.section > div > ul {
  border-top: solid 1px #bbbbbb;
}
.item {
  padding-top: 0.4rem;
  display: flex;
  justify-content: space-between;
}
.item > div:nth-child(1) {
  flex: 1;
  padding-bottom: 0.5rem;
  /* height: 15vh; */
  margin-right: 0.3rem;
  border-bottom: solid 1px #bbbbbb;
  display: flex;
  justify-content: space-between;
}
.item:nth-last-of-type(1) > div:nth-child(1) {
  border-bottom: none;
}
.item > div:nth-child(1) > div:nth-child(2) {
  margin-left: 0.1rem;
  width: 35%;
  height: 1.5rem;
  overflow: hidden;
}
.item > div:nth-child(1) > div:nth-child(1) {
  width: 65%;
}
.h2-c {
  width: 100%;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
}
@media (max-width: 1000px) {
  .header {
    width: calc(100% - 0.4rem);
  }
}
</style>
