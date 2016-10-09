import Vue from 'vue'
import Tag from './components/Tag.vue'

Vue.component('tag', Tag)

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: 'body'
})
