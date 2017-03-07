<template>
  <div class='editor-container'>
    <div v-el:toolbar-container>
      <span class="ql-formats">
        <!-- <select class="ql-font"></select> -->
        <select class="ql-size"></select>
      </span>
      <span class="ql-formats">
        <button class="ql-bold"></button>
        <button class="ql-italic"></button>
        <button class="ql-underline"></button>
        <button class="ql-strike"></button>
        <select class="ql-color"></select>
        <select class="ql-background"></select>
      </span>
<!--           <span class="ql-formats">
        <select class="ql-color"></select>
        <select class="ql-background"></select>
      </span> -->
<!--           <span class="ql-formats">
        <button class="ql-script" value="sub"></button>
        <button class="ql-script" value="super"></button>
      </span> -->
<!--           <span class="ql-formats">
        <button class="ql-header" value="1"></button>
        <button class="ql-header" value="2"></button>
        <button class="ql-blockquote"></button>
        <button class="ql-code-block"></button>
      </span> -->
      <span class="ql-formats">
        <button class="ql-list" value="ordered"></button>
        <button class="ql-list" value="bullet"></button>
        <button class="ql-indent" value="-1"></button>
        <button class="ql-indent" value="+1"></button>
        <button class="ql-blockquote"></button>
        <button class="ql-code-block"></button>
      </span>
<!--           <span class="ql-formats">
        <button class="ql-direction" value="rtl"></button>
        <select class="ql-align"></select>
      </span> -->
      <span class="ql-formats">
        <button class="ql-link"></button>
        <button class="ql-image"></button>
        <button class="ql-video"></button>
        <!-- <button class="ql-formula"></button> -->
        <button class="ql-clean"></button>
      </span>
<!--         <span class="ql-formats">
        <button class="ql-clean"></button>
      </span> -->
    </div>
    <div v-el:editor-container></div>
  </div>
</template>

<script>
const $ = require('jquery')
const Quill = require('quill')
export default {
  components: {
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      type: 1,
      quill: null
    }
  },
  computed: {
  },

  filter: {
  },

  methods: {
  },
  ready () {
    var me = this
    $(function () {
      me.quill = new Quill(me.$els.editorContainer, {
        modules: {
          formula: true,
          syntax: true,
          toolbar: me.$els.toolbarContainer
        },
        placeholder: 'Compose an epic...',
        theme: 'snow'
      })
      me.quill.setText(me.value)
      me.quill.on('text-change', function (delta, oldDelta, source) {
        if (source === 'api') {
          // console.log('An API call triggered this change.')
        } else if (source === 'user') {
          // console.log('A user action triggered this change.')
          me.value = $(me.$els.editorContainer).find('.ql-editor').html()
        }
      })
    })
  },
  beforeDestroy () {
    if (this._closeEvent) {
      this._closeEvent.remove()
    }
  }
}
</script>

<style lang='less'>
@import "~quill/dist/quill.snow.css";
</style>

