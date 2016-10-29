<template>
    <div class="dropdown">
        <button class="btn  btn-sm btn-default dropdown-toggle mr-5"
        type="button" data-toggle="dropdown">{{label}}:&nbsp;{{selected}}<span class="caret"></span></button>
        <ul class="dropdown-menu">
            <li
              @click="clickHandler"
              v-for="item in items"><a>{{item.name}}</a></li>
        </ul>
    </div>
</template>

<script>
require('../commons.less')
// const _ = require('underscore')
const $ = require('jquery')
// const api = require('../../assets/tagApi')
const uuid = require('assets/common/utils')
const {EventListener} = require('assets/EventListener')
const DatePicker = require('../date-picker/DatePicker')
export default {
  components: {
    DatePicker
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
    clickHandler: function (e) {
      var text = $(e.target).text()
      this.selected = text
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
    const el = this.$el
    this.uuid = uuid()
    this._closeEvent = EventListener.listen(window, 'click', (e) => {
      window.e = e
      var inside = el.contains(e.target)
      if (!inside) {
        // 修正
        inside = $(e.target).parents('.aui-datepicker-dialog').length > 0 || $(e.target).parents('.ui-widget-header').length > 0
      }
      if (!inside) {
        el.classList.remove('open')
      }
    })
  },
  beforeDestroy () {
    if (this._closeEvent) {
      this._closeEvent.remove()
    }
  }
}
</script>

<style lang="less">
.dropdown-menu>li>a {
	cursor: pointer;
}
</style>

