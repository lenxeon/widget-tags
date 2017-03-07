<template>
  <div>
    <div>
      <ul id="menu">
        <li><a v-link="{ path: '/Tag'}">Tag</a></li>
        <li><a v-link="{ path: '/UserFilter'}">UserFilter</a></li>
        <li><a v-link="{ path: '/KeywordFilter'}">KeywordFilter</a></li>
        <li><a v-link="{ path: '/ModuleFilter'}">ModuleFilter</a></li>
        <li><a v-link="{ path: '/ProjectFilter'}">ProjectFilter</a></li>
        <li><a v-link="{ path: '/TaskStatusFilter'}">TaskStatusFilter</a></li>
        <li><a v-link="{ path: '/CreateDateFilter'}">CreateDateFilter</a></li>
        <li><a v-link="{ path: '/DatePicker'}">DatePicker</a></li>
        <li><a v-link="{ path: '/module'}">module</a></li>
      </ul>
    </div>
    <!-- main view -->
    <div id="view">
      <router-view keep-alive>
      </router-view>
    </div>
  </div>
</template>
<script>
  let api = process.env.API + ''
  export default {
    name: 'App',
    created () {
      console.log(api)
    }
  }
</script>

<style lang="less">
#menu {
  margin-top: 20px;
  li {
    list-style: none;
    cursor: pointer;
    display: inline;
    padding: 5px 0px 5px 5px;
  }
}
#view {
  border: 1px dashed #ccc;
  padding: 20px;
  margin: 20px;
  min-height: 1200px;
  // top: 60px;
  // left: 20px;
  // right: 20px;
  // bottom: 0px;
  // position: absolute;

}
</style>