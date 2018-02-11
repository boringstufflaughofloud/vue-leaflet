
const MapStore = {
  state: {
    mapPoint: {lat: 48.32162640812711, lng: 36.31942749023438},
    selectedItem : null
  },
  mutations: {
    setMapPoint: (state, point) => {
      console.log(point);
      state.mapPoint = point
    },

    selectItem: (state, marker) => {
      debugger
      state.selectedItem = marker;
    },
  },


  getters:{
    getFormatedCoordinatesForFooter: (state) => {
      return 'LAT ' + state.mapPoint.lat.toFixed(2) + ' | LNG ' + state.mapPoint.lng.toFixed(2);
    }
  }


};

export default MapStore
