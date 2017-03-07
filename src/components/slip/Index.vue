<template>
	<!--用户 start-->
    <div >
      <slip :show.sync="show">
        <module slot="content"></module>
      </slip>
      <button @click="click">出来{{show}}</button>
    </div>
    <!--用户 end-->
</template>

<script>
import Slip from './Slip.vue'
import Module from '../../docs/module/index.vue'
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
    Slip,
    Module
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

