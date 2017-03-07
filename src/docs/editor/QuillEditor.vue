<template>
  <div class="editor">
    <quill-editor :value.once="value"></quill-editor>
  </div>
</template>

<script>
import {QuillEditor} from '../../index.js'
export default {
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  components: {
    QuillEditor
  },
  data () {
    return {
      value: '这是你的文本信息'
    }
  },
  computed: {
  },

  filter: {
  },

  methods: {
  },
  ready () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="less">
.editor{
  background: #fff;
  width: 936px;
  margin: 0 auto;
  border: 1px solid #e5e5e5;
  .editor-container{
    .ql-toolbar{
      border: none;
      background: #f5f5f5;
      border-bottom: 1px solid #e5e5e5;
    }
    .ql-container{
      border: none;
      .ql-editor{
        background-color: #fff;
        color: #333;
        margin: 20px 40px;
        max-width: 580px;
        font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.66;
        h2 {
          color: #666;
          font-size: 20px;
          display: block;
          font-size: 1.5em;
          -webkit-margin-before: 0.83em;
          -webkit-margin-after: 0.83em;
          -webkit-margin-start: 0px;
          -webkit-margin-end: 0px;
          font-weight: bold;
        }
        p {
          margin: 0 0 1.5em;
          padding: 0;
        }
        img {
          height: auto;
          width: inherit;
          max-width: 100%;
        }
      }
    }
  }
}
</style>

