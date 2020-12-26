import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        usertype: null,
        isUserLoggedIn: false
    },
    mutations: {
        setToken(state, token){
            state.token = token
            state.isUserLoggedIn = true
        },
        setUsertype(state, type){
            state.usertype = type
        },
        destroySession(state){
            state.token = null,
            state.usertype = null,
            state.isUserLoggedIn = false
        }
    },
    actions: {
        setToken ({commit}, token){
            commit('setToken', token)
        },
        setUsertype ({commit}, type){
            commit('setUsertype', type)
        },
        destroySession ({commit}){
            commit("destroySession")
        }
    },
})