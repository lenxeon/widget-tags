<template>
  <li :class="itemClass" v-if="(user)" @click="itemClickHandler">
      <i :class="icoClass"></i>
      <i class="fa mr-5 {{user.ico}}"></i>
      <span>{{user.userName}}</span>
  </li>
</template>
<script>
export default {
  name: 'item',

  props: {
    user: Object,
    multi: {
      type: Boolean,
      default: true
    }
  },
  watch: {
  },

  methods: {
    itemClickHandler: function (event) {
      this.$dispatch('item-checked', this.user)
    }
  },

  computed: {
    itemClass () {
      return {
        'item': true,
        'selected': this.user.checked,
        'hover': this.user.hover,
        'single': !this.multi
      }
    },
    icoClass () {
      return {
        'fa': true,
        'mr-5': true,
        'fa-square-o': this.multi && !this.user.checked,
        'fa-square': this.multi && this.user.checked
      }
    }
  },

  ready () {
    console.log(this.multi)
  },
  created () {
    // console.log(this.$data)
  }
}
</script>
<style lang="less">
</style>
