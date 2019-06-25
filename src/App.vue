<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
body,html{
  width: 100%;
  height: 100%;
  font-family: SourceHanSansSC-regular;
}
ul,li{
  list-style: none;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
