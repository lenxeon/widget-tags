<!-- <template>
  <div>
    <select v-model="widget" :on-change="changeHandler">
      <option value="tag">Tag</option>
      <option value="user-filter">UserFilter</option>
      <option value="keyword-filter">KeywordFilter</option>
      <option value="module-filter">ModuleFilter</option>
      <option value="project-filter">ProjectFilter</option>
      <option value="task-status-filter">TaskStatusFilter</option>
      <option value="create-date-filter">CreateDateFilter</option>
      <option value="date-picker">DatePicker</option>
      <option value="module">module</option>
    </select>
  </div>
  <div class="showArea">
    <component :is="widget" transition="fade" transition-mode="out-in">
    </component>
  </div>
</template>

<script>

import VueRouter from 'vue-router'
import Tag from './components/tag/Tag.vue'
import UserFilter from './components/user-filter/UserFilter.vue'
import KeywordFilter from './components/keyword-filter/KeywordFilter.vue'
import ModuleFilter from './components/module-filter/ModuleFilter.vue'
import ProjectFilter from './components/project-filter/ProjectFilter.vue'
import TaskStatusFilter from './components/task-status-filter/TaskStatusFilter.vue'
import CreateDateFilter from './components/create-date-filter/CreateDateFilter.vue'
import DatePicker from './components/date-picker/DatePicker.vue'
import Module from './components/module/Module.vue'

// Vue.component('tag', Tag)
// Vue.component('userFilter', UserFilter)
// Vue.component('keywordFilter', KeywordFilter)
// Vue.component('moduleFilter', ModuleFilter)
// Vue.component('projectFilter', ProjectFilter)
// Vue.component('task-status-filter', TaskStatusFilter)
// Vue.component('create-date-filter', CreateDateFilter)
// Vue.component('date-picker', DatePicker)

// Vue.component('dashboard', Dashboard)
export default {
  props: {
    widget: {
      type: String,
      default: 'create-date-filter'
    }
  },
  components: {
    Tag,
    UserFilter,
    KeywordFilter,
    ModuleFilter,
    ProjectFilter,
    TaskStatusFilter,
    CreateDateFilter,
    DatePicker,
    Module
    // Dashboard
  },
  data () {
    return {
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
    changeHandler: function () {
      console.log(this)
    }
  },
  ready () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="less">
.showArea{
  margin-top: 20px;
  padding: 20px;
  border: 1px dashed #ddd;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style> -->