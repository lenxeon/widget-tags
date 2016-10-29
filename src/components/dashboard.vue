<template>
    <div class="clear mt-15">标签</div>
    <tag class="clear"></tag>

    <div @click="clickHandler" class="clear mt-15">用户过滤器</div>
    <user-filter
      empty-text="请选择用户"
      label-name="创建人"
      unit="人"
      :selected-ids="selectedUser"
      :multi="multi"
      class="clear"></user-filter>

    <div class="clear mt-15">关键字过滤器</div>
    <keyword-filter class="clear"></keyword-filter>

    <div class="clear mt-15">模块过滤</div>
    <module-filter 
      :items="modules" 
      :label="label" 
      :selected="selected" 
      class="clear"></module-filter>

    <div class="clear mt-15">项目过滤</div>
    <project-filter class="clear"></project-filter>

    <div class="clear mt-15">状态过滤</div>
    <task-status-filter class="clear"></task-status-filter>

    <div class="clear mt-15">日期过滤</div>
    <create-date-filter class="clear"></create-date-filter>

    <div class="clear mt-15">日期过滤</div>
    <date-picker class="clear"></date-picker>
</template>

<script>
// const _ = require('underscore')
// const $ = require('jquery')
// const api = require('../../assets/tagApi')
// const uuid = require('assets/common/utils')
// const {EventListener} = require('assets/EventListener')
const DatePicker = require('./date-picker/DatePicker')
export default {
  components: {
    DatePicker
  },
  props: {
    uuid: {
      type: String,
      default: ''
    },
    subjectId: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 500
    }
    // ,
    // callback: {
    //   type: Object,
    //   default: function (o) {
    //     console.log(o)
    //   }
    // }
  },
  data () {
    return {
      type: 1,
      open: false,
      loading: false,
      locked: false,
      newTag: '',
      selectIndex: -1,
      tags: [],
      searchResult: [],
      multi: true,
      label: '模块',
      selected: '任务',
      selectedUser: ['1011', '1013501'],
      modules: [{
        uuid: '1',
        name: '任务'
      }, {
        uuid: '2',
        name: '文件'
      }, {
        uuid: '3',
        name: '管理后台'
      }, {
        uuid: '4',
        name: '个人中心'
      }]
    }
  },
  computed: {
    wrapClass () {
      return {
        'dropdown': true
        // 'open': this.open
      }
    },
    autocompleteClass () {
      return {
        'tag-autocomplete': true,
        'empty': this.searchResult.length === 0 && !this.focus
      }
    }
  },

  filter: {
    urlBuilder: function (tagId) {
      return 'http://www.baidu.com/' + tagId
    }
  },

  methods: {
    clickHandler: function () {
      console.log(this.selectedUser)
    },
    select (e) {
      e.preventDefault()
      console.log(e)
      return false
    },
    onfocusHandler (e) {
      window.t = e.target
      this.type = parseInt(e.target.getAttribute('mod'))
      e.preventDefault()
    },
    toggleDropdown (e) {
      e.preventDefault()
      this.$el.classList.toggle('open')
    }
  },
  ready () {
    console.log(this)
    // const el = this.$el
    // this.uuid = uuid()
    // this._closeEvent = EventListener.listen(window, 'click', (e) => {
    //   window.e = e
    //   var inside = el.contains(e.target)
    //   if (!inside) {
    //     // 修正
    //     inside = $(e.target).parents('.aui-datepicker-dialog').length > 0 || $(e.target).parents('.ui-widget-header').length > 0
    //   }
    //   if (!inside) {
    //     el.classList.remove('open')
    //   }
    // })
  },
  beforeDestroy () {
    if (this._closeEvent) {
      this._closeEvent.remove()
    }
  }
}
</script>

<style lang="less">
.warp{
  padding: 10px;
  li{
    padding: 2px 5px;
  }
  button{
    padding: 2px 10px
  }
  .text-center{
    text-align: center;
  }
}
</style>