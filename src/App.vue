<template>
  <div class='tag-box fadeIn ani600 {{loading?'':'loaded'}}' id='tag-box'>
    <div :class='wrapClass'>
      <ul class='tags' id='tag-list'>
        <li class='item' v-for='tag in tags'>
            <a v-bind:href='tag.uuid'>{{tag.name}}</a>
            <i v-on:click='unBindTag' tag-id='{{tag.uuid}}' class='fa fa-times fa-1 ml-5'></i>
        </li>
        <li class='item editable'>
          <input
              v-on:blur='blurHander'
              v-on:keyup.enter='submitHandler'
              v-on:keyup.up='upSelectHandler'
              v-on:keyup.down='downSelectHandler'
              v-on:keyup = 'searchTagHandler | debounce 300'
              v-model='newTag'
              v-el:tag-input
              class='tag-input' type='text'/>
          <span>
          </span>
          <span v-on:click='addTagHander'
            class='tag-editable-addtag ml-5'>
            添加分类标签
          </span>
        </li>
      </ul>
      <div class='tag-autocomplete' v-bind:style="{ width: width + 'px' }">
        <div v-if='newTag.length==0' class='tag-autocomplete-placeholder'>
          输入分类标签名称(回车提交)
        </div>
        <div v-else>
          <ul v-if='searchResult.length>0' class='tag-autocomplete-results'>
            <li v-for='(index, tag) in searchResult'
            :tag="tag"
            :class="{ 'result-item': true, 'active':$index===selectIndex }"
            tag-id="{{tag.uuid}}">{{tag.name}}</li>
          </ul>
          <ul v-else class='tag-autocomplete-results'>
            <li class='autocomplete-result-tip'>enter 自定义分类</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ENTER_KEY = 13
const LEFT_KEY = 37
const UP_KEY = 38
const RIGHT_KEY = 39
const DOWN_KEY = 40
const _ = require('underscore')
const $ = require('jquery')
const api = require('./assets/data')
// var timer
export default {
  props: {
    subjectId: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      focus: false,
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
        'tag-box-wrap': true,
        'focus': this.focus
      }
    }
    // ,
    // resultItemClass (tag) {
    //   console.log(tag)
    //   return {
    //     'result-item': true,
    //     'active': this.selectIndex
    //   }
    // }
  },
  filter: {
    urlBuilder: function (tagId) {
      return 'http://www.baidu.com/' + tagId
    }
  },

  methods: {

    /**
     * 点击开始添加
     */
    addTagHander (e) {
      e.preventDefault()
      var me = this
      me.focus = true
      console.log(this.selectIndex)
      me.$nextTick(function () {
        me.$els.tagInput.focus()
      })
    },

    /**
     * 失去焦点
     */
    blurHander (e) {
      this.focus = false
      e.preventDefault()
    },

    /**
     * 向上选择
     */
    upSelectHandler (e) {
      var me = this
      me.$els.tagInput.value = this.newTag
      this.selectIndex = Math.max(this.selectIndex - 1, 0)
      e.preventDefault()
      return false
    },

    /**
     * 向下选择
     */
    downSelectHandler (e) {
      var me = this
      me.$els.tagInput.value = this.newTag
      var length = this.searchResult.length
      this.selectIndex = Math.min(this.selectIndex + 1, length - 1)
      this.selectIndex = Math.max(this.selectIndex, 0)
      e.preventDefault()
      return false
    },

    /**
     * 回车，先中一个，或者生成一个新的
     */
    submitHandler () {
      var _tagName = ''
      if (this.searchResult.length > 0 && this.selectIndex >= 0) {
        var tag = this.searchResult[this.selectIndex]
        console.log('选择已存在的：' + tag.name)
        _tagName = tag.name
      } else {
        console.log('生成新的：' + this.newTag)
        _tagName = this.newTag
      }
      if (_tagName && _tagName.trim().length >= 0) {
        this.bindTag(_tagName)
      }
      this.newTag = ''
      this.searchResult = []
    },

    loadShow () {
      this.locked = true
      this.loading = true
    },

    loadHide () {
      this.locked = false
      this.loading = false
    },

    load () {
      var me = this
      me.loadShow()
      // timer = setTimeout(function () {
      //   me.loadHide()
      // }, 3000)
      // $.ajax({
      //   type: 'GET',
      //   dataType: 'json',
      //   // async: false,
      //   url: globalConf.contextPath + '/api/v1/tags.json?subjectId=' + subjectId,
      //   xhrFields: {
      //     withCredentials: true
      //   },
      //   crossDomain: true,
      //   contentType: 'application/x-www-form-urlencoded charset=utf-8',
      //   erro () {
      //     me.loadHide()
      //     clearTimeout(timer)
      //   },
      //   success (resp) {
      //     clearTimeout(timer)
      //     me.loadHide()
      //     me.tags = resp.tags || []
      //   }
      // })
    },
    searchTagHandler (e) {
      // var me = this
      var keyCode = e.keyCode
      if (keyCode === UP_KEY || keyCode === LEFT_KEY || keyCode === RIGHT_KEY ||
        keyCode === DOWN_KEY || keyCode === ENTER_KEY) {
        return false
      }
      var tagName = this.newTag
      console.log('tag==[%s]', tagName)
      if (tagName.length === 0) {
        return
      }
      api.search(tagName, () => {

      }, (_matched) => {
        console.log(_matched)
        this.searchResult = _matched
        this.selectIndex = -1
      })
    },
    filterBinded (arr) {
      var result = []
      arr = arr || []
      var names = []
      $.each(this.tags, function (index, tag) {
        names.push(tag.name)
      })
      for (var i = 0; i < arr.length; i++) {
        var tag = arr[i]
        if (names.indexOf(tag.name) === -1) {
          result.push(tag)
        }
      }
      return result
    },

    /**
     * 绑定tag
     */
    bindTag (tagName) {
      var me = this
      for (var i = 0; i < this.tags.length; i++) {
        if (this.tags[i].name === tagName) {
          return false
        }
      }
      me.tags.push({
        uuid: null,
        name: tagName
      })
      // $.ajax({
      //   type: 'POST',
      //   dataType: 'json',
      //   url: globalConf.contextPath + '/api/v1/' + subjectId + '/tags.json',
      //   xhrFields: {
      //     withCredentials: true
      //   },
      //   crossDomain: true,
      //   contentType: 'application/x-www-form-urlencoded charset=utf-8',
      //   data: {
      //     'tagName': tagName
      //   },
      //   success (resp) {
      //     var uuid = resp.tag.uuid
      //     $.each(me.tags, function(tag, index) {
      //       if (tag.name == tagName) {
      //         tag.uuid = uuid
      //       }
      //     })
      //   }
      // })
    },

    /**
     * un绑定tag
     */
    unBindTag (e) {
      // var me = this
      var tagId = $(e.target).attr('tag-id')
      console.info(this.subjectId + '\t==' + tagId)
      api.unBindTagById(this.subjectId, tagId, () => {

      }, () => {
        var _tags = _.filter(this.tags, (tag) => {
          return tag.uuid !== tagId
        })
        this.tags = _tags
      })
    },

    /**
     * 从数组中清除tag
     */
    remove (tagId) {
      var me = this
      for (var i = 0; i < me.tags.length; i++) {
        var tag = me.tags[i]
        if (tag.uuid === tagId) {
          me.tags.splice(i, 1)
        }
      }
    }
  },
  created () {
    this.load()
  }
}
</script>

<style lang="less">

@border-color:   #eee;

.tag-box {
  // position: absolute;
  width: 100%;
	&.loaded{
		.spinner{
			display: none;
		}
	}
	.tag-box-wrap {
		border: 1px solid rgba(187, 187, 187, 0);

		.tags {
			zoom: 1;
			overflow: hidden;
			margin: 0;
			padding: 3px 4px 0;

			.item {
				position: relative;
				line-height: 20px;
				padding: 0 5px;
				padding-right: 18px;
				-moz-border-radius: 3px;
				-webkit-border-radius: 3px;
				border-radius: 3px;
				border: 1px solid @border-color;
				cursor: default;
				list-style-type: none;
				float: left;
				display: block;
				margin: 0 5px 3px 0;
				cursor: default;
				max-width: 100px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 10px;
				background-color: #f3f3f4;
				padding: 3px 20px 1px 12px;
				color: inherit;
				border: 1px solid #e7eaec;
				margin-right: 5px;
				margin-top: 5px;
				display: block;

				&.editable {
					border: 0 solid #fff;
					max-width: auto;
					background-color: transparent;
					padding: 0px 0px;
				}
				a {
					cursor: pointer;
					color: inherit;
				}
				.fa-times {
					position: absolute;
					display: block;
					cursor: pointer;
					color: #999;
					right: 5px;
					top: 7px;
				}
				.tag-input {
					border: 1px solid #f0f0f0;
					padding: 2px 5px;
					font-size: 11px;
					box-shadow: none;
					width: 50px;
					display: none;
					border-radius: 0
				}
				.tag-editable-addtag {
					cursor: pointer;
					display: inline-block;
					color: inherit;
					vertical-align: middle;
					line-height: 26px;
				}
			}
		}
		.tag-autocomplete {
			position: absolute;
			z-index: 288;
			margin-left: -1px;
      font-size: 12px;

			.tag-autocomplete-placeholder {
				border-top: none;
				display: none;
				background: #F9F9F9;
				filter: alpha(opacity=98);
				opacity: .98;
				webkit-box-shadow: 0 3px 3px @border-color;
				moz-box-shadow: 0 3px 3px @border-color;
				box-shadow: 0 3px 3px @border-color;
				padding: 5px 7px;
			}
		}
		.tag-autocomplete-results {
      border-top: none;
      font-size: 12px;
			display: none;
      background: #F9F9F9;
      filter: alpha(opacity=98);
      opacity: .98;
      webkit-box-shadow: 0 3px 3px @border-color;
      moz-box-shadow: 0 3px 3px @border-color;
      box-shadow: 0 3px 3px @border-color;

			.autocomplete-result-tip {
				padding: 5px 7px;
        background: #F9F9F9;
        filter: alpha(opacity=98);
        opacity: .98;
				list-style-type: none;
				cursor: default;
			}
			.result-item {
				padding-left: 20px;
				padding-right: 5px;
				padding-bottom: 5px;
				margin: 0;
				padding-top: 5px;
				list-style-type: none;
				box-sizing: border-bottom;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block;
        cursor: pointer;

				&.active,&:hover {
					background: rgba(0, 125, 219, 0.1);
				}
			}
		}
		.tag-autocomplete-results {
			padding-right: 0;
			padding-left: 0;
			padding-bottom: 0;
			margin: 0;
			padding-top: 0;
		}
	}
	.focus {
		border: 1px solid @border-color;

		.tag-input {
			display: inline-block !important;
		}
		.tag-editable-addtag {
			display: none !important;
		}
    .tag-autocomplete{
      border: 1px solid @border-color;
      border-top: none;
    }
		.tag-autocomplete-placeholder{
			display: block !important;
		}
		.tag-autocomplete-results{
			display: block !important;
		}
	}
}
</style>
