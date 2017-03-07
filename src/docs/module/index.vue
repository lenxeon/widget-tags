<template>
	<!--用户 start-->
  <module title="用户" class="clear">
    <ul class="item-details clear list-unstyled">
      <li class="people-details">
        <dl>
          <dt>经办人:</dt>
          <dd>
            <span class="view-issue-field editable-field inactive"
            title="Click to edit">
              <span class="user-hover">
                <span class="aui-avatar aui-avatar-small">
                  <span class="aui-avatar-inner">
                    <i class="fa fa-user"></i>
                  </span>
                </span>
                张三疯
              </span>
              <i class="fa fa-pencil"></i>
            </span>
            <span class="assign-to-me-link">
              <a class="issueaction-assign-to-me" href="/secure/AssignIssue.jspa?atl_token=B5LF-Q5T5-CRZH-0CCX|ac9dbd15d5c1cc2169d3f0f07ab8d72c4ff8ce39|lin&amp;id=11506&amp;assignee=daidh"
              title=" ( 键入 'i' )">
                分配给我
              </a>
            </span>
          </dd>
        </dl>
        <dl>
          <dt>
            报告人:
          </dt>
          <dd>
            <span class="view-issue-field editable-field inactive"
            title="Click to edit">
              <span class="user-hover" rel="wangjian">
                <span class="aui-avatar aui-avatar-small">
                  <span class="aui-avatar-inner">
                    <i class="fa fa-user"></i>
                  </span>
                </span>
                李四民
              </span>
              <i class="fa fa-pencil"></i>
            </span>
          </dd>
        </dl>
        <dl>
          <dt>
            关注人:
          </dt>
          <dd>
            <i class="fa fa-star-o mr-5 follow"></i>
            <a href="/secure/ManageWatchers!default.jspa?id=11506"
            title="查看关注人">
              <span class="aui-badge watch-state-off">
                2
              </span>
            </a>
            <a class="watch-state-off" href="/secure/VoteOrWatchIssue.jspa?atl_token=B5LF-Q5T5-CRZH-0CCX|ac9dbd15d5c1cc2169d3f0f07ab8d72c4ff8ce39|lin&amp;id=11506&amp;watch=watch"
            rel="11506">
              关注这个问题
            </a>
            <span class="icon">
            </span>
          </dd>
        </dl>
      </li>
    </ul>
  </module>
  <!--用户 end-->


  <!--用户 start-->
  <module title="日期" class="clear">
    <ul class="item-details clear list-unstyled">
      <li class="people-details">
        <dl>
          <dt>创建日期:</dt>
          <dd>
            <span class="view-issue-field editable-field inactive"
            title="Click to edit">
              <span class="user-hover">
                <span class="aui-avatar aui-avatar-small">
                  <span class="aui-avatar-inner">
                    <i class="fa fa-clock-o"></i>
                  </span>
                </span>
                <date-picker dt="2016-02-29"></date-picker>
              </span>
              <i class="fa fa-pencil"></i>
            </span>
            <span class="assign-to-me-link">
              <a class="issueaction-assign-to-me" href="/secure/AssignIssue.jspa?atl_token=B5LF-Q5T5-CRZH-0CCX|ac9dbd15d5c1cc2169d3f0f07ab8d72c4ff8ce39|lin&amp;id=11506&amp;assignee=daidh"
              title=" ( 键入 'i' )">
                分配给我
              </a>
            </span>
          </dd>
        </dl>
        <dl>
          <dt>
            更新日期:
          </dt>
          <dd>
            <span class="view-issue-field editable-field inactive"
            title="Click to edit">
              <span class="user-hover" rel="wangjian">
                <span class="aui-avatar aui-avatar-small">
                  <span class="aui-avatar-inner">
                    <i class="fa fa-clock-o"></i>
                  </span>
                </span>
                <date-picker dt="2016-02-29"></date-picker>
              </span>
              <i class="fa fa-pencil"></i>
            </span>
          </dd>
        </dl>
        <dl>
          <dt>
            计划完成时间:
          </dt>
          <dd>
            <i class="fa fa-clock-o mr-5 follow"></i>
            <a href="/secure/ManageWatchers!default.jspa?id=11506"
            title="查看关注人">
              <span class="aui-badge watch-state-off">
                2
              </span>
            </a>
            <a class="watch-state-off" href="/secure/VoteOrWatchIssue.jspa?atl_token=B5LF-Q5T5-CRZH-0CCX|ac9dbd15d5c1cc2169d3f0f07ab8d72c4ff8ce39|lin&amp;id=11506&amp;watch=watch"
            rel="11506">
              关注这个问题
            </a>
            <span class="icon">
            </span>
          </dd>
        </dl>
      </li>
    </ul>
  </module>

  <!--用户 end--><!--用户 start-->
  <module title="日期" class="clear">
    <ul class="property-list two-cols clear">
      <li class="item full-width tag-item">
        <div class="wrap" id="wrap-labels">
          <strong class="name">
            创建日期:
          </strong>
          <div class="value" title="Click to edit">
            <i class="fa fa-clock-o"></i>
            <date-picker dt="2016-02-29"></date-picker>
            <i class="fa fa-pencil"></i>
          </div>
        </div>
      </li>
      <li class="item full-width tag-item">
        <div class="wrap" id="wrap-labels">
          <strong class="name">
            更新日期:
          </strong>
          <div class="value" title="Click to edit">
            <i class="fa fa-clock-o"></i>
            <date-picker dt="2016-02-29"></date-picker>
            <i class="fa fa-pencil"></i>
          </div>
        </div>
      </li>
      <li class="item full-width tag-item">
        <div class="wrap" id="wrap-labels">
          <strong class="name">
            计划完成时间:
          </strong>
          <div class="value" title="Click to edit">
            <i class="fa fa-clock-o"></i>
            <date-picker dt="2016-02-29"></date-picker>
            <i class="fa fa-pencil"></i>
            <a href="/secure/ManageWatchers!default.jspa?id=11506"
            title="查看关注人">
              <span class="aui-badge watch-state-off">
                2
              </span>
            </a>
            <a class="watch-state-off" href="/secure/VoteOrWatchIssue.jspa?atl_token=B5LF-Q5T5-CRZH-0CCX|ac9dbd15d5c1cc2169d3f0f07ab8d72c4ff8ce39|lin&amp;id=11506&amp;watch=watch"
            rel="11506">
              关注这个问题
            </a>
          </div>
        </div>
      </li>
    </ul>
  </module>
  <!--用户 end-->


  <!--问题详情-->
  <module title="问题详情" class="clear">
    <ul class="property-list two-cols clear">
      <li class="item">
        <div class="wrap">
          <strong class="name">
            类型:
          </strong>
          <span class="value editable-field inactive" title="Click to edit">
            <i class="task.taskType.ico" alt="任务"></i>任务
            <span class="overlay-icon aui-icon aui-icon-small aui-iconfont-edit">
            </span>
          </span>
        </div>
      </li>
      <li class="item item-right">
        <div class="wrap">
          <strong class="name">
            状态:
          </strong>
          <span class="value status">
            <span class="aui-lozenge"
            data-tooltip="<span class=&quot;jira-issue-status-tooltip-title&quot;>Done</span>">
              进行中
            </span>
            <span class="aui-lozenge bg-clear">
              <a class="issueaction-viewworkflow new-workflow-designer" href="/browse/PMTEST-2?workflowName=test2&amp;stepId=7">
                查看工作流
              </a>
            </span>
          </span>
        </div>
      </li>
      <li class="item">
        <div class="wrap">
          <strong class="name">
            优先级:
          </strong>
          <span class="value editable-field inactive" title="Click to edit">
            <i class="fa fa-lightbulb-o mr-5" alt="重要"></i>重要
            <span class="overlay-icon aui-icon aui-icon-small aui-iconfont-edit">
            </span>
          </span>
        </div>
      </li>
      <li class="item item-right">
        <div class="wrap">
          <strong class="name">
            解决结果:
          </strong>
          <span class="value unresolved">
            未解决
          </span>
        </div>
      </li>
      <li class="item full-width tag-item">
        <div class="wrap" id="wrap-labels">
          <strong class="name">
            标签:
          </strong>
          <div class="value" title="Click to edit">
            <tag></tag>
          </div>
        </div>
      </li>
    </ul>
  </module>
  <!--问题详情 end-->
</template>

<script>
import Tag from '../../components/tag/Index.vue'
import Module from '../../components/module/Module.vue'
import {DatePicker} from '../../index.js'
export default {
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
    // ,
    // subjectId: {
    //   type: String,
    //   default: ''
    // },
    // width: {
    //   type: Number,
    //   default: 500
    // }
  },
  components: {
    Tag,
    Module,
    DatePicker
  },
  data () {
    return {
    }
  },
  computed: {
    wrapClass () {
      return {
        'module toggle-wrap': true,
        'expanded': this.expanded,
        'collapsed': !this.expanded
      }
    }
  },

  filter: {
    urlBuilder: function (tagId) {
      return 'http://www.baidu.com/' + tagId
    }
  },

  methods: {
    toggleClass: function () {
      console.log(this.expanded)
      this.expanded = !this.expanded
    }
  },
  ready () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="less">
.item-details{
  &>li{
    dl{
      dt{
        color: #707070;
        display: table-cell;
        font-weight: normal;
        text-align: left;
        vertical-align: top;
        width: 120px;
        box-sizing: border-box;
        padding: 2px 5px 2px 0;
        float: left;
      }
      dd{
        .aui-avatar{
          height: 16px;
          width: 16px;
          line-height: 16px;
          .aui-avatar-inner{
            height: 16px;
            width: 16px;
            line-height: 16px;
          }
        }

        .fa{
          height: 16px;
          line-height: 16px;
          width: 16px;
        }
      }
    }
  }
}

.property-list {
  display: block;
  margin: 0;
  list-style: none;
  padding: 0;

  &>.item {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    clear: left;
    float: left;
    width: 50%;

    .wrap {
      .name {
        font-weight: 700;
        line-height: 24px;
        height: 24px;
        display: block;
        float: left;
        width: 120px;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: border-box;
        word-wrap: break-word;
        word-break: break-word;
        color: #707070;
        display: inline-block;
        font-weight: normal;
        padding: 2px 5px 2px 0;
        text-align: left;
      }
      .value{
        padding: 4px 0px 0px 0px;
        float: left;
        display: block;
        &.status{
          padding-top: 3px;
        }
      }
      .bg-clear{
        background: transparent;
        border:none;
      }
    }
    &.tag-item{
      .value{
        padding-top: 0px;
      }
    }
  }

  .item-right {
      clear: right;
      float: right;
  }

  .full-width {
      clear: both;
      width: 100%;
  }
}
</style>

