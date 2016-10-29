import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import App from './App.vue'
import Tag from './components/tag/Tag.vue'
import UserFilter from './components/user-filter/UserFilter.vue'
import KeywordFilter from './components/keyword-filter/KeywordFilter.vue'
import ModuleFilter from './components/module-filter/ModuleFilter.vue'
import ProjectFilter from './components/project-filter/ProjectFilter.vue'
import TaskStatusFilter from './components/task-status-filter/TaskStatusFilter.vue'
import CreateDateFilter from './components/create-date-filter/CreateDateFilter.vue'
import DatePicker from './components/date-picker/DatePicker.vue'
import Dashboard from './components/dashboard.vue'
import Module from './docs/module/index.vue'

// Vue.component('tag', Tag)
// Vue.component('userFilter', UserFilter)
// Vue.component('keywordFilter', KeywordFilter)
// Vue.component('moduleFilter', ModuleFilter)
// Vue.component('projectFilter', ProjectFilter)
// Vue.component('task-status-filter', TaskStatusFilter)
// Vue.component('create-date-filter', CreateDateFilter)
// Vue.component('date-picker', DatePicker)

// Vue.component('dashboard', Dashboard)

// import components from './components.vue'
// Vue.component('components', components)

Vue.config.debug = true
Vue.config.devtools = true

var router = new Router()
window.router = router
router.map({
  '/Tag': {
    component: Tag
  },
  '/UserFilter': {
    component: UserFilter
  },
  '/KeywordFilter': {
    component: KeywordFilter
  },
  '/ModuleFilter': {
    component: ModuleFilter
  },
  '/ProjectFilter': {
    component: ProjectFilter
  },
  '/TaskStatusFilter': {
    component: TaskStatusFilter
  },
  '/CreateDateFilter': {
    component: CreateDateFilter
  },
  '/DatePicker': {
    component: DatePicker
  },
  '/Dashboard': {
    component: Dashboard
  },
  '/module': {
    component: Module
  }
})

router.redirect({
  '*': '/Tag'
})

router.start(App, '#app')
