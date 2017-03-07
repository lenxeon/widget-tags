<template>
  <!-- <abbr v-el:time title="2012-11-28T11:17:00Z"></abbr>  -->
  <div>{{timeStr}}</div>
</template>

<script>
// const $ = require('jquery')
const timeago = require('timeago')
export default {
  props: {
    time: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      timeStr: ''
    }
  },

  components: {
  },

  computed: {
  },

  filter: {
  },

  methods: {
  },
  ready () {
    this.timeStr = timeago(this.time)
  },
  beforeDestroy () {
  }
}
</script>

