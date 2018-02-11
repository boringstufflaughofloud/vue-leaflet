
const MapStore = {
  state: {
    mapPoint: {lat: 48.32162640812711, lng: 36.31942749023438}
  },
  mutations: {
    setMapPoint: (state, point) => {
      console.log(point);
      state.mapPoint = point
    }
  },


  getters:{
    getFormatedCoordinatesForFooter: (state) => {
      return 'LAT ' + state.mapPoint.lat.toFixed(2) + ' | LNG ' + state.mapPoint.lng.toFixed(2);
    }
  }


};

export default MapStore
