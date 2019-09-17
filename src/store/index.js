import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins: [
        // 持久化uid与sr
        createPersistedState({
            reducer(val) {
                return {
                    uid: val.uid,
                    sr: val.sr
                }
            }
        })
    ]
})

export default store
