/// /////////////////////////////////////////////////////////////
// Created by LUKASHENKO YEVHENII on 04.02.2018.
/// /////////////////////////////////////////////////////////////
import Vue from 'vue'
import Vuex from 'vuex'
import UIStore from './modules/UIStore'

Vue.use(Vuex);

const Store = new Vuex.Store({

  modules:{
    uiStore: UIStore
  }

});

export default Store
