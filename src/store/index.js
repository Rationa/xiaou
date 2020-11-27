//引入核心库
import Vue from 'vue'
import Vuex from 'Vuex'

//调用vuex
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name:'miku'
    },
    mutations:{
        CHANGE_NAME(state){
            state.name = 'Hatsume Miku'
        }
    }
})