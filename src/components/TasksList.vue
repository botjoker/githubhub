<template>
  <div class="tasks-list">
    <div class="tasks-list__header">
      <div class="tasks-list__control" :class = "{ 'tasks-list__control--active' : currentType === 'OPEN' }" @click="showTasksByType('OPEN')">Opened</div>
      <div class="tasks-list__control" :class = "{ 'tasks-list__control--active' : currentType === 'CLOSED' }" @click="showTasksByType('CLOSED')">Closed</div>
    </div>
    <div v-for="task in tasksList.edges" :key="task.node.number">
      <Task :task=task.node />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
import Task from '../components/Task'


export default {
  name: 'TasksList',  
  components: { Task },
  data: () => {
    return {
      currentType: 'OPEN',
    }
  },
  computed: {
    ...mapState(['tasksList']),  
  },
  beforeCreate() {
    let payload = {'type': 'OPEN'}
    store.dispatch('fetchTasksList', payload)
  },
  methods: {
    showTasksByType(taskType) {
      store.dispatch('fetchTasksList', {'type': taskType})
      this.currentType = taskType
    }
  }
}
</script>

<style scoped>
  .tasks-list {
    margin: 0 auto;
    width: 1200px;
    border: 1px solid #E1E4E8;
    border-radius: 5px;
    text-align: left;
  }

  .tasks-list__header {
    background: #F6F8FA;
    border-bottom: 1px solid #E1E4E8;
    padding: 20px 10px;
  }

  .tasks-list__control {
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
  }
  .tasks-list__control--active {
    font-weight: bold;
  }

  @media(max-width: 1200px) {
    .tasks-list {
      width: 100%;
    }
  }

</style>
