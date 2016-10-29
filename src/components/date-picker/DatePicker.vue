<template>
    <input v-el:picker :uuid="uuid" readonly="true" class="aui-date-picker" languageCode="zh-CN" type="date"/>
</template>

<script>
require('../commons.less')
// const _ = require('underscore')
// const $ = require('jquery')
// const api = require('../../assets/tagApi')
const {EventListener} = require('assets/EventListener')
const AJS = require('@atlassian/aui')
export default {
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
      open: false,
      loading: false,
      locked: false,
      newTag: '',
      selectIndex: -1,
      tags: [],
      searchResult: []
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
      this.open = !this.open
    },
    select (e) {
      e.preventDefault()
      console.log(e)
      return false
    },
    toggleDropdown (e) {
      e.preventDefault()
      this.$el.classList.toggle('open')
    }
  },
  ready () {
    const el = this.$el
    this._closeEvent = EventListener.listen(window, 'click', (e) => {
      if (!el.contains(e.target)) {
        el.classList.remove('open')
      }
    })
    // console.log(AJS)
    AJS.$(this.$els.picker).datePicker({'overrideBrowserDefault': true})
  },
  beforeDestroy () {
    if (this._closeEvent) {
      this._closeEvent.remove()
    }
  }
}
</script>

<style lang="less">
.aui-datepicker-dialog{
  z-index: 9999;
  min-height: 226px;
  *{
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .hasDatepicker{
    height: 226px;
  }

  th, td{
    padding: 1px;
  }

  .ui-datepicker .ui-datepicker-calendar tbody {
    background-color: #fff;
    td a{
      cursor: pointer;
    }
  }
}
</style>

