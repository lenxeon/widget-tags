<template>
<div 
  class="navigator-container"
  :class="{'expand':expand}">
  <nav v-el:main-menu 
    class="navigator-sidebar navigator-left-sidebar ui-sidebar-scrollable animated">
    <span
      @click="clickHandler"
      class="target rgt">
        <i class="fa fa-angle-double-left"></i>
    </span>
    <slot v-show="expand" name="menu"></slot>
  </nav>
  <main v-el:panel class="navigator-body">
    <slot name="main"></slot>
  </main>
</div>
</template>

<script>
export default {
  components: {
  },

  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    },
    subjectId: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '标签'
    },
    selected: {
      type: String,
      default: '请选择'
    }
  },

  data () {
    return {
      expand: false,
      open: false
    }
  },

  computed: {
  },

  filter: {
    urlBuilder: function (tagId) {
      return 'http:// www.baidu.com/' + tagId
    }
  },

  methods: {
    clickHandler: function (e) {
      this.expand = !this.expand
    },
    toggleDropdown (e) {
      e.preventDefault()
      this.$el.classList.toggle('open')
    }
  },

  ready () {
  },

  beforeDestroy () {
  }
}
</script>

<style lang='less'>
.navigator-container {
  display: table-cell;
  vertical-align: top;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  .navigator-sidebar, .navigator-body{
    display: table-cell;
    vertical-align: top;    
    transition: width .3s ease-in-out;
  }

  .navigator-sidebar {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 0px;
    box-shadow: 0 0 2px #ccc;
    z-index: 2;

    .target{
      padding: 5px 3px;
      border: 1px solid #ccc;
      margin-right: -16px;
      margin-top: 15px;
      color: #888;
      cursor: pointer;
      position: absolute;
      right: 0px;
      -webkit-transform: rotate(180deg);
      &:hover{
        background: #eee;
      }
    }
  }

  .navigator-body{
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    right: 0;
  }

  &.expand {
    .navigator-sidebar{
      width: 250px;
    }
    .navigator-body{
      left: 250px;
    }
    .target{
      -webkit-transform: rotate(0deg);
    }
  }
}
</style>

