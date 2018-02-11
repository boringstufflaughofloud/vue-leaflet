import Guid from "../../utils/Guid"
import _ from "lodash";

const ItemStorage = {
  state: {
    items : []
  },
  mutations: {
    addItem: (state, item) => {
      console.log(item);
      item.id = Guid.newGuid();
      state.items.push(item);
    }
  },

  getters:{
    getById: (state, id) => {
        return _.find(state.items, (item) => {
          return item.id === id;
        });
    }
  }


};

export default ItemStorage
