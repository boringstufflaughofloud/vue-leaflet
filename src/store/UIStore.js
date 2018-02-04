/// /////////////////////////////////////////////////////////////
// Created by LUKASHENKO YEVHENII on 04.02.2018.
/// /////////////////////////////////////////////////////////////
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const UIStore = new Vuex.Store({
  state: {
    sidebarVisibility: false
  },
  mutations: {
    toogleSidebar (state) {
      state.sidebarVisibility = !state.sidebarVisibility
    }
  }
})

export default UIStore
