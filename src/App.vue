<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
 * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html, body, #app {
    width: 100%;
    height: 100%;
  }
  .btn{
    padding: 3px;
    border: 1px solid orange;
    background: #fff;
    color: rgb(48, 44, 37);
    width: 20px;
    outline: none;
  }
</style>
