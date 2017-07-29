/**
 * Created by yanlli on 2017/7/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        id: 0
    },
    mutations: {
        setId(state, id) {
            state.id = id;
        }
    },
})
