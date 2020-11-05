import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const REFRESH_MARKERS_MUTATION = "refreshMarkers";
export const REFRESH_MARKERS_ACTION = "refreshAction";
export const UPDATE_MARKER_POSITION_KEY_BY_INDEX_MUTATION =
  "update_marker_by_index_mutation";
export const UPDATE_MARKER_POSITION_BY_INDEX_MUTATION =
  "update_marker_position_by_index_mutation";
export const REMOVE_MARKER_MUTATION = "remove_marker_mutation";
export const ADD_MARKER_MUTATION = "add_marker_mutation";

const DEFAULT_MARKER = {
  position: {
    lat: 50,
    lng: 50
  }
};
let timer = 300,
  wait = false;
export default new Vuex.Store({
  state: {
    markers: [{ position: { lat: -25.363, lng: 131.044 } }]
  },
  mutations: {
    [ADD_MARKER_MUTATION](state) {
      state.markers.push({ ...DEFAULT_MARKER });
    },
    [REFRESH_MARKERS_MUTATION](state, { markers }) {
      state.markers = markers;
    },
    [UPDATE_MARKER_POSITION_KEY_BY_INDEX_MUTATION](
      state,
      { index, value, positionKey }
    ) {
      state.markers[index].position[positionKey] = value;
    },
    [UPDATE_MARKER_POSITION_BY_INDEX_MUTATION](state, { index, position }) {
      if (!wait) {
        wait = true;
        state.markers[index].position = position;
        setTimeout(() => {
          wait = false;
        }, timer);
      }
    },
    [REMOVE_MARKER_MUTATION](state, index) {
      state.markers.splice(index, 1);
    }
  },
  actions: {
    notifyServer({commmit}, markers) {
      // fetch('blabla/marker/update', {
      //   data: markers
      // })
    },
    [REFRESH_MARKERS_ACTION]({ commit }) {
      const markers = [];
      const count = 20;
      const getLat = () => Math.floor(Math.random() * 180 - 90);
      const getLng = () => Math.floor(Math.random() * 360 - 180);

      for (let i = 0; i < count; i++) {
        markers[i] = {
          position: {
            lat: getLat(),
            lng: getLng()
          }
        };
      }
      commit({
        type: REFRESH_MARKERS_MUTATION,
        markers
      });
    }
  },
  modules: {}
});
