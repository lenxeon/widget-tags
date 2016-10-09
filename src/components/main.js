import Vue from 'vue'
import Main from './Tag.vue'

let Tag = Vue.extend(Main)
// let instance

const TagFactory = options => {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      selectClassify: options
    }
  }
  // instance = new Tag({
  //   e: options
  // })
  // instance.vm = instance.$mount()
  // console.log(instance)
  // document.body.appendChild(instance.vm.$el)
  console.log('hi tag')
  Vue.component('tag', Tag)
}

export default TagFactory
