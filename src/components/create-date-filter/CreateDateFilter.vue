<template>
    <div class="dropdown">
        <button 
          class="btn btn-sm btn-default dropdown-toggle mr-5"
          @click="toggleDropdown"
          type="button">模块:任务<span class="caret"></span></button>
        <ul class="dropdown-menu warp">
            <li>
              <div class="field-group">
                <input v-model="type" type="radio" name="type" value="1" class="js-dp-type-toggle"/>
              <label for="withinTheLastRadio">在&nbsp;</label>
              <input mod="2" class="js-val" type="number" maxlength="10" v-on:focus="onfocusHandler"> 
              <label for="withinTheLastRadio">&nbsp;</label>
              <select class="js-measurement" @click="select">
                <option @click="select" nam value="m">分</option>
                <option @click="select" value="h">小时</option>
                <option @click="select" value="d">天</option>
                <option @click="select" value="w">周</option>
              </select>
              <label for="withinTheLastRadio">之后</label>
              </div>
            </li>
            <li>
              <div class="field-group">
                <input v-model="type" type="radio" name="type" value="2" class="js-dp-type-toggle"/>
              <label for="withinTheLastRadio">在&nbsp;</label>
              <input mod="2" class="js-val" type="number" maxlength="10" v-on:focus="onfocusHandler">
              <label for="withinTheLastRadio">&nbsp;</label>
              <select class="js-measurement" @click="select">
                <option @click="select" nam value="m">分</option>
                <option @click="select" value="h">小时</option>
                <option @click="select" value="d">天</option>
                <option @click="select" value="w">周</option>
              </select>
              <label for="withinTheLastRadio">之前</label>
              </div>
            </li>
            <li>
              <div class="field-group">
                <input 
                  v-model="type" 
                  type="radio" 
                  name="type" 
                  value="3" 
                  class="js-dp-type-toggle"/>
              <label for="withinTheLastRadio">在&nbsp;</label>
              <date-picker mod="3" v-on:focus="onfocusHandler" :uuid="uuid"></date-picker>
              <label for="withinTheLastRadio">&nbsp;</label>
              <date-picker mod="3" v-on:focus="onfocusHandler" :uuid="uuid"></date-picker>
              <label for="withinTheLastRadio">之间</label>
              </div>
            </li>
            <li>
              <div class="field-group text-center">
                <button class="btn btn-sm btn-default m-t-n-xs" type="button">
                  <strong>更新</strong>
                </button>
                <button 
                  @click="toggleDropdown"
                  class="btn btn-sm btn-link m-t-n-xs ml-5" 
                  type="button">
                  <strong>取消</strong>
                </button>
              </div>
            </li>
        </ul>
    </div>
</template>

<script>
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

