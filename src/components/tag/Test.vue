<template>
	<!--用户 start-->
    <div >
      <tag :show.sync="show" link="http://www.yugusoft.com/tag="></tag>
    </div>
    <!--用户 end-->
</template>

<script>
import Tag from './Index.vue'
export default {
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      show: false
    }
  },
  components: {
    Tag
  },
  computed: {
  },

  filter: {
  },

  methods: {
    click: function () {
      this.show = !this.show
    }
  },
  ready () {
  },
  beforeDestroy () {
  }
}
</script>

