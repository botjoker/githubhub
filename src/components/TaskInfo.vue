<template>
  <div class="task-info">
    <router-link to='/'> Back </router-link>
    <h1>{{task.title}}</h1>
    <p v-html="task.bodyHTML"></p>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import store from '../store'

export default {
  name: 'TaskInfo',  
  computed: {    
    ...mapState(['task']),
  },
  beforeCreate() {
    let payload = {'id': this.$route.params.id}
    store.dispatch('fetchTask', payload)
  },
}
</script>

<style scoped>
  .task-info {
    width: 1200px;
    margin: 0 auto;
    text-align: left;
  }
  @media(max-width: 1200px) {
    .task-info {
      width: 100%;
    }
  }

</style>
