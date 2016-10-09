<template>
<Tag subject-id="122ad"></Tag> 
</template>

<script>
// const Tag = require('./components/index')

import Tag from './components/Tag'
// var timer
export default {
  data () {
    return {
      focus: true,
      loading: false,
      locked: false,
      newTag: '',
      selectIndex: -1,
      tags: [],
      searchResult: []
    }
  },
  methods: {
    callback: function (e) {
      console.log(e)
    }
  },
  components: {
    Tag
  },
  computed: {
  },
  filter: {
    urlBuilder: function (tagId) {
      return 'http://www.baidu.com/' + tagId
    }
  },
  ready () {
    console.log('created')
    // Tag({
    //   api: 'http://app01.yugusoft.com/ftask/api', // 服务器地址,可指定是测试服务器还是正式服务器
    //   title: '为任务选择分类', // 指定弹出标题
    //   // 以下是必选参数
    //   compId: 'DbazTRK72RF1Beiqxx6SSQ',
    //   token: '1243a5456e15e57835c620ab8eefe5a4',
    //   defaultChooseId: 'MAyhQpuS5QPVExu6nToBMg',
    //   // 以下是可选的额外参数
    //   extendParams: {
    //     start: 0,
    //     limit: 20,
    //     build: 7228,
    //     plat: 'Mac',
    //     app_key: '82f9KD6TAMb2waoMR9en5C'
    //   },
    //   // 加调地址
    //   callback: (data) => {
    //     // 打印选中的数据
    //     console.log(data)
    //   }
    // })
  }
}
</script>

<style lang="less">
</style>
