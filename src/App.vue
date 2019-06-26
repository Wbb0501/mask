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
ul,li{
  list-style: none;
}
#app{
  margin: 0 auto;
  width: 1200px;
  padding: .2rem;
  height: 100%;
}
@media (max-width: 1000px) { 
  #app{
    width: 100%;
  }
 }
</style>
