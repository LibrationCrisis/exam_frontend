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
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: "Microsoft YaHei", "Helvetica", "Tahoma", "Geneva", "Arial", sans-serif;
    background-color: rgba(1,149,255,0.1);
  }
</style>

