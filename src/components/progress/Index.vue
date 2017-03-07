<template>
<img v-bind:src="result">
</template>

<script>
export default {
  components: {
  },
  props: {
    pre: {
      type: String,
      default: '进度'
    },
    middle: {
      type: Number,
      default: '80'
    },
    themes: {
      type: String,
      default: 'brightgreen'
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    result () {
      let themes = 'yello'
      if (this.middle < 25) {
        themes = 'yello'
      } else if (this.middle < 50) {
        themes = 'yellowgreen'
      } else if (this.middle < 75) {
        themes = 'green'
      } else if (this.middle < 100) {
        themes = 'brightgreen'
      }
      return 'https://img.shields.io/badge/' +
      encodeURIComponent(this.pre) + '-' +
      encodeURIComponent(this.middle + '%') + '-' +
      encodeURIComponent(themes) + '.svg?maxAge=2592000'
    }
  },

  filter: {
  },

  methods: {
  },
  ready () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang='less'>

</style>

