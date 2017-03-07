<template>
  <my-header></my-header>
  <div id="view">
    <router-view keep-alive></router-view>
  </div>
</template>
<script>
  let api = process.env.API + ''
  import MyHeader from './components/header/Index.vue'
  export default {
    name: 'App',
    components: {
      MyHeader
    },
    created () {
      console.log(api)
    }
  }
</script>

<style lang="less">
@import './me.less';
#view{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 41px;
}
</style>