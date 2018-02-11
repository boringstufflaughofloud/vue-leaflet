////////////////////////////////////////////////////////////////
// Created by LUKASHENKO YEVHENII on 10.02.2018.
//
////////////////////////////////////////////////////////////////
import L from 'leaflet';
import SymbolGenerator from '../../../utils/SymbolGenerator';
export default {
  methods: {

    markerClickHandler(e){
      console.log(e.target.id)

      this.$store.commit("selectItem", e.target.id);

      var popLocation= e.latlng;
      var popup = L.popup()
        .setLatLng(popLocation)
        .setContent('<p>UriId - ' + e.target.id +'</p>')
        .openOn(this.map);
    }
  },
}
