import Vue from 'vue'
import Vuex from 'vuex'
import gql from 'graphql-tag'

import graphqlClient from '../utils/graphql'

Vue.use(Vuex)

export const mutations = {
  setTasksList(state, tasksList) {
    state.tasksList = tasksList
  },
  setTask(state, task) {
    state.task = task
  },
}

export const actions = {
  async fetchTasksList({ commit }, payload) {
    const response = await graphqlClient.query({
      query: gql`
        query {
          repository(owner: "vuejs", name: "vue") {
            issues(last: 50, states: ${payload.type}) {
              edges {
                node {
                  title
                  url
                  labels(first: 5) {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                  comments {
                    totalCount
                  }
                  number
                  author {
                    login
                  }
                  closed
                }
              }
            }
          }
        }
      `,
    })
    commit('setTasksList', response.data.repository.issues)
  },
  async fetchTask({ commit }, payload) {
    const response = await graphqlClient.query({
      query: gql`
        query {
          repository(owner: "vuejs", name: "vue") {
            issue(number: ${payload.id}) {
              id
              bodyHTML
              title
            }
          }
        }
      `,
    })
    commit('setTask', response.data.repository.issue)
  },
}

export const state = {
  tasksList: [],
  task: [],
}

export default new Vuex.Store({
  mutations,
  actions,
  state,
})