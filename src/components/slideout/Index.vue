<template>
<nav v-el:main-menu class="menu main-menu">
    <h2>Menu</h2>
    <ul class="api-menu animated">
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="">每分钟QPS分析</a>
        </li>
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="">接口响应速度分析</a>
        </li>
    </ul>
</nav>

<nav v-el:sub-menu class="menu sub-menu">
    <h2>Menu</h2>
    <ul class="api-menu animated">
        #foreach($api in $apis)  
        <li role="presentation">
            <a role="menuitem" tabindex="-1" href="?api=$api">$api</a>
        </li>
        #end
    </ul>
</nav>

<main v-el:panel class="panel">
  <header class="lft" style="position: absolute; z-index: 99999;">
    <button class="main-toggle-button">☰</button>
  </header>
  <header class="rgt" style="position: relative; z-index: 99999;">
    <button class="sub-toggle-button">☰</button>
  </header>
    <div id="main" style="
      padding: 20px 0px;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      position: absolute;
      background: transparent;
      display: block;
      left: 0;
      right: 0;
      top: 0;
      bottom: 30px;">
    </div>
</main>
</template>

<script>
const $ = require('jquery')
const Slideout = require('slideout')
export default {
  components: {
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
    // const el = this.$el
    console.log(this.$els.panel)
    console.log(this.$els.panel)
    var mainSlideout = new Slideout({
      'panel': this.$els.panel,
      'menu': this.$els.mainMenu,
      'padding': 256,
      'tolerance': 70
    })

    var subSlideout = new Slideout({
      'panel': this.$els.panel,
      'menu': this.$els.subMenu,
      'side': 'right',
      'padding': 256,
      'tolerance': 70
    })

    document.querySelector('.main-toggle-button').addEventListener('click', function () {
      mainSlideout.toggle()
    })

    document.querySelector('.sub-toggle-button').addEventListener('click', function () {
      subSlideout.toggle()
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
.slideout-panel {
  position:relative;
  z-index: 1;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}



.panel {
    padding-top: 5px;
    min-height: 100%;
    overflow: hidden;
    padding: 20px 0px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: absolute;
    background: transparent;
    display: block;
    left: 0;
    right: 0;
    top: 0;
    bottom: 30px;
}

.menu {
    background-color: #162436;
}

.menu, .slideout-menu {
  position: fixed;
  top: 41px;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 256px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: none;
}
.slideout-menu.main-menu{
  left: 0;
}
.slideout-menu.sub-menu{
  
}

.panel,
.slideout-panel {
  position: relative;
  z-index: 1;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}

/* Animation
---------------------------------- */
@-webkit-keyframes shake {
  0%, 100% {
    -webkit-transform:translate3d(0, 0, 0);
    transform:translate3d(0, 0, 0);
  }

  50% {
    -webkit-transform:translate3d(-10px, 0, 0);
    transform:translate3d(-10px, 0, 0);
  }
}

@keyframes shake {
  0%, 100% {
    -webkit-transform:translate3d(0, 0, 0);
    transform:translate3d(0, 0, 0);
  }

  50% {
    -webkit-transform:translate3d(-10px, 0, 0);
    transform:translate3d(-10px, 0, 0);
  }
}

.shake {
  -webkit-animation-name:shake;
  animation-name:shake;
  -webkit-animation-duration:2s;
  animation-duration:2s;
  -webkit-animation-iteration-count: 4;
  animation-iteration-count: 4;
}
</style>

