<template>
  <header id="header" role="banner">
    <!-- App Header goes inside #header -->
    <nav class="aui-header aui-dropdown2-trigger-group" role="navigation" data-aui-responsive="true">
      <div class="aui-header-primary">
        <h1 id="logo" class="aui-header-logo aui-header-logo-aui">
          <a href="javascript:void()">
            <span style="font-size: 20px; padding-left: 12px;">
                <i class="fa fa-tumblr-square mr-10" aria-hidden="true">
                </i>TMUI
            </span>
          </a>
        </h1>
        
        <ul class="aui-nav __skate" style="width: auto;" resolved="">
          <li>
            <a href="#dropdown2-jira0" 
              aria-owns="dropdown2-jira0" 
              aria-haspopup="true" 
              class="aui-dropdown2-trigger" 
              aria-controls="dropdown2-jira0" 
              resolved="" 
              aria-expanded="false"><i class="fa fa-tachometer mr-5"></i>基础组件</a>
            <div 
              class="aui-dropdown2 aui-style-default aui-dropdown2-in-header aui-layer" 
              id="dropdown2-jira0" 
              style="display: none; top: 40px; min-width: 160px; left: 1213px; " 
              aria-hidden="true" 
              resolved="">
                <div class="aui-dropdown2-section">
                  <ul>
                    <li><a v-link="{ path: '/Tag'}">Tag</a></li>
                    <li><a v-link="{ path: '/UserFilter'}">UserFilter</a></li>
                    <li><a v-link="{ path: '/KeywordFilter'}">KeywordFilter</a></li>
                    <li><a v-link="{ path: '/ModuleFilter'}">ModuleFilter</a></li>
                    <li><a v-link="{ path: '/ProjectFilter'}">ProjectFilter</a></li>
                    <li><a v-link="{ path: '/TaskStatusFilter'}">TaskStatusFilter</a></li>
                    <li><a v-link="{ path: '/CreateDateFilter'}">CreateDateFilter</a></li>
                    <li><a v-link="{ path: '/DatePicker'}">DatePicker</a></li>
                    <li><a v-link="{ path: '/module'}">module</a></li>
                    <li><a v-link="{ path: '/Slip'}">slip</a></li>
                    <li><a v-link="{ path: '/QuillEditor'}">QuillEditor</a></li>
                    <li><a v-link="{ path: '/MceEditor'}">MceEditor</a></li>
                    <li><a v-link="{ path: '/timeago'}">TimeAgo</a></li>
                    <li><a v-link="{ path: '/SlideOut'}">SlideOut</a></li>
                    <li><a v-link="{ path: '/Progress'}">Progress</a></li>
                    <li><a v-link="{ path: '/Layout'}">layout</a></li>
                  </ul>
                </div>
            </div>
          </li>

          <li>
            <a href="#dropdown2-jira3" 
              aria-owns="dropdown2-jira3" 
              aria-haspopup="true" 
              class="aui-dropdown2-trigger" 
              aria-controls="dropdown2-jira3" 
              resolved="" 
              aria-expanded="false"><i class="fa fa-diamond mr-5"></i>功能组件</a>
            <div 
              class="aui-dropdown2 aui-style-default aui-dropdown2-in-header aui-layer" 
              id="dropdown2-jira3" 
              style="display: none; top: 40px; min-width: 160px; left: 1213px; " 
              aria-hidden="true" 
              resolved="">
              <div class="aui-dropdown2-section">
                <ul>
                  <li><a href="/project/index.html">北新汽车项目</a></li>
                  <li><a href="/project/index.html">七星集团项目</a></li>
                  <li><a href="/project/index.html">用户系统</a></li>
                  <li><a href="/project/index.html">任务系统</a></li>
                </ul>
              </div>
              <div class="aui-dropdown2-section">
                <strong>最近的问题</strong>
                <ul>
                  <li><a href="/project/index.html">北新汽车项目</a></li>
                  <li><a href="/project/index.html">七星集团项目</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li style="display: none;">
            <a id="aui-responsive-header-dropdown-trigger-1" class="  aui-dropdown2-trigger" aria-owns="aui-responsive-header-dropdown-content-1" aria-controls="aui-responsive-header-dropdown-content-1" aria-haspopup="true" href="#" data-aui-trigger="" resolved="" aria-expanded="false">More<span class="icon aui-icon-dropdown"></span></a><div id="aui-responsive-header-dropdown-content-1" class="aui-dropdown2 aui-style-default aui-layer" resolved="" aria-hidden="true"><div class="aui-dropdown2-section"><ul id="aui-responsive-header-dropdown-list-1"></ul></div></div></li><li><a class="aui-button aui-button-primary" href="javascript:createTask()" resolved="">新建</a>
          </li>
        </ul>
      </div>

      <div class="aui-header-secondary">
        <ul class="aui-nav">
          <li id="system-help-menu">
            <a class="aui-nav-link aui-dropdown2-trigger" 
                id="help_menu" aria-haspopup="true" 
                aria-owns="system-help-menu-content" 
                href="https://docs.atlassian.com/jira/docs-063/JIRA+Documentation" 
                target="$textUtils.htmlEncode($rootHelpMenuItem.params.target)" 
                title="帮助" aria-controls="system-help-menu-content">
                    <span class="aui-icon aui-icon-small aui-iconfont-help">帮助</span>
            </a>

            <div id="system-help-menu-content" class="aui-dropdown2 aui-style-default aui-dropdown2-in-header" data-dropdown2-alignment="left" aria-hidden="true" style="left: 1260px; top: 82px; display: none;">
              <div class="aui-dropdown2-section">
                <ul id="jira-help" class="aui-list-truncate">
                  <li>
                      <a id="view_help" class="" title="转到JIRA在线帮助网站" href="https://docs.atlassian.com/jira/docs-063/JIRA+Documentation" target="_blank">在线帮助</a>
                  </li>
                  <li>
                      <a id="keyshortscuthelp" class="" title="获得更多快捷键信息 ( 键入 '?' )" href="/secure/ViewKeyboardShortcuts!default.jspa" target="_blank">快捷键</a>
                  </li>
                  <li>
                      <a id="view_about" class="" title="获取 JIRA 的更多信息" href="/secure/AboutPage.jspa">关于 JIRA</a>
                  </li>
                  <li>
                      <a id="view_credits" class="" title="查看开发JIRA的研发团队" href="/secure/JiraCreditsPage!default.jspa" target="_blank">JIRA 研发团队</a>
                  </li>
                  <li>
                      <a id="whats-new-menu-link" class="" href="https://docs.atlassian.com/jira/docs-063/whatsnew/full?od=false&amp;a=true&amp;pa=true">最新功能</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    components: {
    },
    created () {
    }
  }
</script>

<style lang="less">
</style>