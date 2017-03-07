<template>
	<!--用户 start-->
    <div :class="wrapClass">
      <div class="mod-header">
        <ul class="ops" @click="toggleClass"></ul>
        <h2 class="toggle-title" @click="toggleClass">{{title}}</h2>
      </div>
      <div class="mod-content">
        <slot></slot>
      </div>
    </div>
    <!--用户 end-->
</template>

<script>
export default {
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    }
    // width: {
    //   type: Number,
    //   default: 500
    // }
  },
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    wrapClass () {
      return {
        'module toggle-wrap': true,
        'expanded': this.expanded,
        'collapsed': !this.expanded
      }
    }
  },

  filter: {
    urlBuilder: function (tagId) {
      return 'http://www.baidu.com/' + tagId
    }
  },

  methods: {
    toggleClass: function () {
      console.log(this.expanded)
      this.expanded = !this.expanded
    }
  },
  ready () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="less">
.module {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;

    .mod-header {
        background: url('./img/mod-header.png') repeat-x scroll 0 10px;

        .ops {
            list-style-type: none;
            margin: 0;
            padding: 0;
            float: right;
        }
        .toggle-title {
            background-color: rgb(255, 255, 255);
            // background-image: url('./down.png');
            background-position: 5px 50%;
            background-repeat: no-repeat;
            color: rgb(51, 51, 51);
            cursor: pointer;
            display: inline-block;
            font-family: Arial, sans-serif;
            font-size: 14px;
            font-weight: bold;
            height: 21px;
            line-height: 21px;
            margin-bottom: 0px;
            margin-left: -20px;
            margin-right: 0px;
            margin-top: 0px;
            padding-bottom: 0px;
            padding-left: 20px;
            padding-right: 5px;
            padding-top: 0px;
            position: relative;
            text-transform: none;

            &:hover {
                background-image: url('./img/down.png');
            }
        }
    }
    .mod-content {
        margin-top: 5px;
        padding-left: 10px;
    }
    &.collapsed {
        .toggle-title {
            background-image: url('./img/right.png');

            &:hover {
                background-image: url('./img/right.png');
            }
        }
        .mod-content {
            display: none;
        }
    }
}
</style>

