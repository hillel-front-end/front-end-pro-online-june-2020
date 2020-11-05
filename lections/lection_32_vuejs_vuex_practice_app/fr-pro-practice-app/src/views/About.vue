<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
      <div class="map-block">
        <GmapMap
          ref="mapRef"
          :center="mapCenter"
          :zoom="2"
          map-type-id="terrain"
          style="width: 600px; height: 600px"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @drag="onMarkerDrag($event, index)"
            @click="mapCenter = m.position"
          />
        </GmapMap>
      </div>
      <div class="list-block">
        <button @click="onRefresh">Refresh</button>
        <table border="1">
          <colgroup>
            <col />
            <col style="width: 200px" />
            <col style="width: 200px" />
          </colgroup>
          <tr>
            <th>#</th>
            <th>Lat</th>
            <th>Lng</th>
          </tr>
          <tr
            class="table-row"
            v-for="(marker, index) in markers"
            :key="index"
            @dblclick="onSelectMarker(marker)"
          >
            <td>{{ index }}</td>
            <td>
              <input
                type="number"
                min="-180"
                max="180"
                @input="onLatChange($event, index, 'lat')"
                :value="marker.position.lat"
              />
            </td>
            <td>
              <input
                type="number"
                min="-180"
                max="180"
                @input="onLatChange($event, index, 'lng')"
                :value="marker.position.lng"
              />
            </td>
            <td>
              <button @click="onRemove(index)">X</button>
            </td>
          </tr>
        </table>
        <button @click="onAddMarker">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ADD_MARKER_MUTATION,
  REFRESH_MARKERS_ACTION, REMOVE_MARKER_MUTATION, UPDATE_MARKER_POSITION_BY_INDEX_MUTATION,
  UPDATE_MARKER_POSITION_KEY_BY_INDEX_MUTATION
} from "../store";
import { mapState } from "vuex";

export default {
  data() {
    return {
      mapCenter: { lat: -25.363, lng: 131.044 }
    };
  },
  computed: {
    ...mapState(["markers"])
  },
  methods: {
    onRefresh() {
      this.$store.dispatch(REFRESH_MARKERS_ACTION);
    },
    onSelectMarker(marker) {
      this.mapCenter = marker.position;
    },
    onLatChange(event, index, positionKey) {
      this.$store.commit({
        type: UPDATE_MARKER_POSITION_KEY_BY_INDEX_MUTATION,
        positionKey,
        index,
        value: +event.target.value
      });
    },
    onMarkerDrag(event, index) {
      this.$store.commit({
        type: UPDATE_MARKER_POSITION_BY_INDEX_MUTATION,
        index,
        position: {
          lat: event.latLng.lat(),
          lng: event.latLng.lng()
        }
      });
    },
    onRemove(index) {
      this.$store.commit(REMOVE_MARKER_MUTATION, index);
    },
    onAddMarker() {
      this.$store.commit(ADD_MARKER_MUTATION);
    }
  },
  created() {
    fetch('asdasdsad/check/markers').then(data => {
      if (data.updated) {
        this.$store.commit('DASFASD_UPDATE', data.markers)
      }
    })
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo(this.mapCenter);
    });
  }
};
</script>
<style lang="scss">
.container {
  display: flex;

  .map-block,
  .list-block {
    width: 50%;
  }
}

.table-row {
  &:hover {
    background-color: aliceblue;
    cursor: pointer;
  }

  input {
    width: 80%;
    margin: 5px;
  }
}
</style>
