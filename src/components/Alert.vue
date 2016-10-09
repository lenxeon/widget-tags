<template>
    <div v-bind:class="[{
        'fbui-alert-default':true,
        'fbui-alert-success':( types == 'success'),
        'fbui-alert-info':( types == 'info'),
        'fbui-alert-danger':( types == 'danger'),
        'fbui-alert-warning':( types == 'warning')
    },customClass]" v-show="show">
        <div v-show="close" @click="closeAlert" class="close">×</div>
        {{ msg }}
    </div>
</template>
<script>
export default{
  data () {
    return {
      show: true,
      msg: '弹出成功',
      close: true,
      customClass: ''
    }
  },
  methods: {
    showAlert: function () {
      if (!this.close) {
        this.timeout()
      }
    },
    timeout: function () {
      var obj = this
      setTimeout(function () {
        obj.show = false
      }, 1000)
    },
    closeAlert: function () {
      this.show = false
    }
  },
  created () {
    this.showAlert()
  }
}
</script>
<style>
    .fbui-alert-default{
        box-shadow:1px 1px 10px #888;
        z-index: 99999;
        position: fixed;
        left: 50%;
        top: 50%;
        margin: -40px 0 0 -50px;
        min-width:100px;
        max-width: 200px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        -webkit-border-radius:4px;
        -moz-border-radius:4px;
        background: #eaf5ff;
        font-size: 12px;
        color: #000;
        line-height:22px;
        font-family:"Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",FontAwesome,sans-serif;
    }
    .fbui-alert-default .close{
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        float: right;
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;
        text-shadow: 0 1px 0 #fff;
        opacity: 0.4;
        filter: alpha(opacity:40);
        margin: -3px -5px auto auto;

    }
    .fbui-alert-success{
        background:#dff0d8;
        color:#3c763d;
        box-shadow:1px 1px 10px #d6e9c6;
        border: 1px solid #d6e9c6;
    }
    .fbui-alert-info{
        background:#d9edf7;
        color:#31708f;
        box-shadow:1px 1px 10px #bce8f1;
        border: 1px solid #bce8f1;
    }
    .fbui-alert-danger{
        background:#f2dede;
        color:#a94442;
        box-shadow:1px 1px 10px #ebccd1;
        border: 1px solid #ebccd1;
    }
    .fbui-alert-warning{
        background:#fcf8e3;
        color:#8a6d3b;
        box-shadow:1px 1px 10px #faebcc;
        border: 1px solid #faebcc;
    }
</style>

