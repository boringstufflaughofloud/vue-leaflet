/// /////////////////////////////////////////////////////////////
// Created by LUKASHENKO YEVHENII on 04.02.2018.
/// /////////////////////////////////////////////////////////////
import Vue from 'vue'
import Vuex from 'vuex'
import UIStore from './modules/UIStore'
import MapStore from './modules/MapStore'
import ItemStorage from './modules/ItemStorage'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Vuex);
Vue.use(BootstrapVue);

const Store = new Vuex.Store({

  modules:{
    uiStore: UIStore,
    mapStore: MapStore,
    itemStorage: ItemStorage
  }

});

export default Store
