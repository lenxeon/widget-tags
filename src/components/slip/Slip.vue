<template>
<div 
  :class="wrapClass"
  :style="[style]">
  <div class="row pt-15">
    <div class="col-lg-12">
      <div class="ibox float-e-margins">
        <div class="ibox-title">
            <h5>{{show}}</h5>
            <div class="ibox-tools">
                <a class="close-link">
                    <i class="fa fa-times" @click="close"></i>
                </a>
            </div>
        </div>
        <slot name="content" class="ibox-content"></slot>
      </div>
    </div>

  </div>
</div>
</template>

<script>
// const _ = require('underscore')
const $ = require('jquery')

import Vue from 'vue'

Vue.transition('slideInRight', {
  enterClass: 'right-left-shake'
})

Vue.transition('slideInUp', {
  enterClass: 'slideInUp'
})

Vue.transition('slideInDown', {
  enterClass: 'slideInDown'
})

Vue.transition('stagger', {
  enterClass: 'slideInRight',
  stagger: function (index) {
    console.log('index:' + index)
      // 每个过渡项目增加 50ms 延时
      // 但是最大延时限制为 300ms
    return index * 50 // Math.min(300, )
  }
})
export default {
  components: {

  },
  props: {
    show: Boolean,
    default: false
  },
  data () {
    return {
      width: 0,
      inited: false,
      style: Object
    }
  },
  computed: {
    wrapClass () {
      return {
        'slip mod-view': true,
        'up2down': this.show
      }
    },
    style () {
      let style = {}
      if (!this.inited) {
        style = {
          width: this.width + 'px',
          transition: 'transform 0ms cubic-bezier(0,1,0.5,1)',
          transform: 'translate(' + this.width + 'px, 0px)'
        }
      } else {
        if (this.show) {
          style = {
            width: this.width + 'px',
            'transform': 'translate(0px, 0px)',
            'transition': 'transform 300ms cubic-bezier(0,1,0.5,1)'
          }
        } else {
          style = {
            width: this.width + 'px',
            'transition': 'transform 300ms cubic-bezier(0,1,0.5,1)',
            transform: 'translate(' + this.width + 'px, 0px)'
          }
        }
      }
      return style
    }
  },

  filter: {
    urlBuilder: function (tagId) {
      return 'http://www.baidu.com/' + tagId
    }
  },

  methods: {
    close: function () {
      this.show = !this.show
    }
  },

  events: {
    'ui-slip-hide' () {
      this.close()
    }
  },
  watch: {
    'show' () {
      this.$nextTick(() => {
        this.inited = true
        var me = this
        if (this.show) {
          setTimeout(function () {
            $(me.$el).addClass('right-left-shake')
          }, 300)
        } else {
          $(me.$el).removeClass('right-left-shake')
        }
      })
    }
  },

  ready () {
    // let me = this
    this.width = $('body').width() * 0.8

    // setTimeout(() => { me.show = true }, 5000)
  },

  beforeDestroy () {
    if (this._closeEvent) {
      this._closeEvent.remove()
    }
  }
}
</script>

<style lang="less">
.mod-view {
  position: fixed;
  z-index: 2005;
  top: 45px;
  right: 0;
  height:100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-color: rgba(238, 238, 238, .96);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0);
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &.up-down-shake {
    -webkit-animation-name: up-down-shake;
    -webkit-animation-duration: 50ms;
    -moz--name: up-down-shake;
    -moz-animation-duration: 50ms;
  }
  &.right-left-shake {
    -webkit-animation-name: right-left-shake;
    -webkit-animation-duration: 50ms;
    -moz--name: up-down-shake;
    -moz-animation-duration: 50ms;
  }
  .mod-view-out-wrap {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0px;

    .mod-view-in-wrap {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0px;
      overflow-y: auto;

      .mod-view-body-wrap {
        position: relative;
        display: block;
      }
    }
  }
  .foot {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 29px;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, .07);
    cursor: pointer;
    text-align: center;
    line-height: 25px;
    background-color: #eee;
    z-index: 1;
  }
}
@-webkit-keyframes up-down-shake {
  100% {
    -webkit-transform: translateY(0);
  }
  90% {
    -webkit-transform: translateY(-10px);
  }
}
@-moz-keyframes up-down-shake {
  100% {
    -moz-transform: translateY(0);
  }
  90% {
    -moz-transform: translateY(-10px);
  }
}
@-webkit-keyframes right-left-shake {
  100% {
    -webkit-transform: translateX(0);
  }
  90% {
    -webkit-transform: translateX(-10px);
  }
}
@-moz-keyframes right-left-shake {
  100% {
    -moz-transform: translateX(0);
  }
  90% {
    -moz-transform: translateX(-10px);
  }
}
</style>

