<template>
<div class="area-box clear">
    <ul class="nav nav-tabs compact">
        <li class="active">
            <a href="#tab-1" data-toggle="tab" aria-expanded="false">所有</a>
        </li>
        <li class="">
            <a href="#tab-2" data-toggle="tab" aria-expanded="true">备注</a>
        </li>
        <li class="">
            <a href="#tab-3" data-toggle="tab" aria-expanded="true">工作日志</a>
        </li>
        <li class="">
            <a href="#tab-4" data-toggle="tab" aria-expanded="true">活动记录</a>
        </li>
        <li class="">
            <a href="#tab-5" data-toggle="tab" aria-expanded="true">活动</a>
        </li>
    </ul>

    <div class="tab-content mt-5">
        <div class="tab-pane active" id="tab-1">
          <comments :sid="task.uuid"></comments>
        </div>
        <div class="tab-pane" id="tab-2">
        </div>
        <div class="tab-pane" id="tab-3">
          #widget("/widget/workinglog/workinglog.vm" "var:width=1000")
        </div>
        <div class="tab-pane" id="tab-4">
        </div>
        <div class="tab-pane" id="tab-5">
        </div>
    </div>
</div>
<template>
<script>
const $ = require('jquery')
export default {
  components: {
  },
  props: {
    subjectId: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '标签'
    }
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
        //  'open': this.open
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
      return 'http:// www.baidu.com/' + tagId
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
    const el = this.$el
    console.log(el)
  },
  beforeDestroy () {
    if (this._closeEvent) {
      this._closeEvent.remove()
    }
  }
}
</script>

<style lang='less'>
.nav.compact {
    padding-left: 15px;
    li {
        border: none;
        &.active {
            a{
              border: 1px solid #ccc;
              background: #fff;
              -webkit-transition: all 0s;
              -moz-transition: all 0s;
              -o-transition: all 0s;
              transition: all 0s;
              &:hover, &.hover{
                background: #fff;
              }
            }
        }
        a {
            background: #eee;
            border: 1px solid #ccc;
            border-bottom: 1px solid transparent !important;
            color: #333;
            margin: 0;
            cursor: pointer;
            padding: 5px 15px 0px 15px;
            height: 30px;
            min-width: 60px;
            text-align: center;
            &:hover, &.hover{
              border: 1px solid #ccc;
              border-bottom: 1px solid transparent !important;
              background: #e6e6e6;
            }
        }
        &:first-child:not(:last-child) a {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
        }
        &:not(:first-child):not(:last-child) a {
            border-radius: 0;
            border-left: none;
        }
        &:last-child:not(:first-child) a {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            border-left: none;
        }
    }
}
</style>