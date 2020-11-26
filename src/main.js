import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import TasksList from './components/TasksList.vue'
import TaskInfo from './components/TaskInfo.vue'
import store from './store'

Vue.use(VueRouter)

const routes = [
  {
    path: "",
    component: TasksList,
  },
  {
    path: "/task/:id",
    component: TaskInfo,
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
