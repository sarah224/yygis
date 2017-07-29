<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  *{
    margin: 0;
    padding:0;
    bottom: 0;
    font-family: "微软雅黑";
  }
  *:focus {
    outline: none;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  dl,dt,dd,ul,li{
    margin:0;
    padding:0;
    list-style:none;
  }
  p{font-size:12px;}
  dt{
    font-size:14px;
    font-family:"微软雅黑";
    font-weight:bold;
    border-bottom:1px dotted #000;
    padding:5px 0 5px 5px;
    margin:5px 0;
  }
  dd{
    padding:5px 0 0 5px;
  }
  li{
    line-height:28px;
  }
</style>
