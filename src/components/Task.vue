<template>
  <div class="task">
    <div class="task__title">
      <svg v-if="!task.closed" class="task__status task__status--open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
      <svg v-if="task.closed" class="task__status task__status--closed" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 0110.65-5.003.75.75 0 00.959-1.153 8 8 0 102.592 8.33.75.75 0 10-1.444-.407A6.5 6.5 0 011.5 8zM8 12a1 1 0 100-2 1 1 0 000 2zm0-8a.75.75 0 01.75.75v3.5a.75.75 0 11-1.5 0v-3.5A.75.75 0 018 4zm4.78 4.28l3-3a.75.75 0 00-1.06-1.06l-2.47 2.47-.97-.97a.749.749 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06 0z"></path></svg>
      <router-link class="task__title-link" :to="{ path: `/task/${task.number}` }"> {{task.title}} </router-link>
      <div class="task__labels" v-if="task.labels.edges.length > 0">
        <div class="task__label" 
          v-for="labelItem in task.labels.edges" 
          :key="labelItem.node.name"
          :style="tagColor[labelItem.node.name]"
          >
            {{labelItem.node.name}}
        </div>
      </div>
    </div>
    <div class="task__info">
      #{{task.number}} opened by {{task.author.login}} 
      <span v-if="task.comments.totalCount > 0">
        <svg class="task__comment" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path></svg>
        <span>{{task.comments.totalCount}}</span>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Task',
  props: ['task'],
  data: () => {
    return {
      tagColor: {
        'feature request':          { color: '#000', background: '#FAC92F'},
        'discussion':               { color: '#000', background: '#D4C6F8'},
        'bug':                      { color: '#FFF', background: '#B40813'},
        'feat:ssr':                 { color: '#000', background: '#ACA2ED'},
        'has workaround':           { color: '#000', background: '#CDF4FE'},
        'feat:compiler':            { color: '#000', background: '#66E5F3'},
        'has PR':                   { color: '#FFF', background: '#542BE3'},
        'contribution welcome':     { color: '#000', background: '#149717'},
        'transition':               { color: '#000', background: '#59F1D4'},
        'has workaround':           { color: '#000', background: '#CDF4FE'},
        'improvement':              { color: '#000', background: '#C8DEF7'},
        'browser quirks':           { color: '#FFF', background: '#542BE3'},
      }
    }
  }
}
</script>

<style scoped>
  .task {
    padding: 8px;
    border-bottom: 1px solid #E1E4E8;
  }
  .task:hover {
    background: #F6F8FA;
  }
  .task__status {
    position: relative;
    top: 2px;
    margin-right: 5px;
  }
  .task__status--open {
    color: #35A353;
    fill: #35A353;
  }
  .task__status--closed {
    color: #CC3442;
    fill: #CC3442;
  }
  .task__title {
    font-weight: bold;
    text-decoration: none;
    color: #000;
  }
  .task__title-link {
    text-decoration: none;
    color: #000;  
  }
  .task__info {
    font-size: 11px;
    color: #586069;
    padding-left: 25px;
  }  
  .task__comment {
    position: relative;
    top: 4px;
    margin: 0 3px 0 5px;
  }
  .task__labels {
    display: inline-block;
    margin: 0 10px;
  }
  .task__label {
    display: inline-block;
    margin-right: 5px;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    border-radius: 15px;
  }

</style>
