<template>
  <textarea>
    <p style="text-align: center;">
      <img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" />
    </p>

    <h1 style="text-align: center;">Welcome to the TinyMCE editor demo!</h1>

    <p>
      Please try out the features provided in this basic example.<br>
      Note that any <strong>MoxieManager</strong> file and image management functionality in this example is part of our commercial offering – the demo is to show the integration.
    </p>

    <h2>Got questions or need help?</h2>

    <ul>
      <li>Our <a href="http://www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
      <li>Have a specific question? Visit the <a href="http://community.tinymce.com/forum/" target="_blank">Community Forum</a>.</li>
      <li>We also offer enterprise grade support as part of <a href="www.tinymce.com/pricing">TinyMCE Enterprise</a>.</li>
    </ul>

    <h2>A simple table to play with</h2>

    <table style="text-align: center;">
      <thead>
        <tr>
          <th>Product</th>
          <th>Cost</th>
          <th>Really?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>TinyMCE</td>
          <td>Free</td>
          <td>YES!</td>
        </tr>
        <tr>
          <td>Plupload</td>
          <td>Free</td>
          <td>YES!</td>
        </tr>
      </tbody>
    </table>

    <h2>Found a bug?</h2>

    <p>
      If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.
    </p>

    <h2>Finally ...</h2>

    <p>
      Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.
    </p>
    <p>
      Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.
    </p>
  </textarea>
</template>

<script>
const $ = require('jquery')
const Tinymce = require('tinymce')
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
      tinymce: null
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
      me.tinymce = Tinymce.init({
        selector: 'textarea',
        skin: 'lightgray',
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image imagetools charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table contextmenu paste code'
        ],
        toolbar: 'bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image mybutton',
        content_css: '//www.tinymce.com/css/codepen.min.css',
        setup: function (editor) {
          editor.addButton('mybutton', {
            type: 'listbox',
            text: 'My listbox',
            icon: false,
            onselect: function (e) {
              editor.insertContent(this.value())
            },
            values: [
              { text: 'Menu item 1', value: '&nbsp;<strong>Some bold text!</strong>' },
              { text: 'Menu item 2', value: '&nbsp;<em>Some italic text!</em>' },
              { text: 'Menu item 3', value: '&nbsp;Some plain text ...' }
            ],
            onPostRender: function () {
              // Select the second item by default
              this.value('&nbsp;<em>Some italic text!</em>')
            }
          })
        },

        // enable title field in the Image dialog
        image_title: true,
        // enable automatic uploads of images represented by blob or data URIs
        automatic_uploads: true,
        // URL of our upload handler (for more details check: https://www.tinymce.com/docs/configure/file-image-upload/#images_upload_url)
        images_upload_url: 'postAcceptor.php',
        // here we add custom filepicker only to Image dialog
        file_picker_types: 'image',
        // and here's our custom image picker
        file_picker_callback: function (cb, value, meta) {
          var input = document.createElement('input')
          input.setAttribute('type', 'file')
          input.setAttribute('accept', 'image/*')
          // Note: In modern browsers input[type="file"] is functional without
          // even adding it to the DOM, but that might not be the case in some older
          // or quirky browsers like IE, so you might want to add it to the DOM
          // just in case, and visually hide it. And do not forget do remove it
          // once you do not need it anymore.

          input.onchange = function () {
            var file = this.files[0]
            // Note: Now we need to register the blob in TinyMCEs image blob
            // registry. In the next release this part hopefully won't be
            // necessary, as we are looking to handle it internally.
            var id = 'blobid' + (new Date()).getTime()
            var blobCache = Tinymce.activeEditor.editorUpload.blobCache
            var blobInfo = blobCache.create(id, file)
            blobCache.add(blobInfo)
            // call the callback and populate the Title field with the file name
            cb(blobInfo.blobUri(), { title: file.name })
          }
          input.click()
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

