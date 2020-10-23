<template>
  <div id="popup" v-if="!hidePopup">
    <div class="popup_title">
      {{ title }}
    </div>
    <div class="popup_content">
<!--      <slot></slot>-->
<!--      <hr>-->
<!--      Status:-->
<!--      <slot v-if="isError === false" name="version_1"></slot>-->
<!--      <slot v-if="isError === true" name="version_2"></slot>-->
<!--      <slot :name="isError ? 'version_1' : 'version_2'"></slot>-->
<!--      ------------------------------------ -->
      <slot name="special_list" :localList="list"></slot>
    </div>
    <div class="popup_actions">
      <button @click="hidePopup = true">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupDefault',
  props: {
    title: String
  },
  data () {
    return {
      hidePopup: false,
      list: [1, 2, 3],
      isError: true
    }
  }
}
</script>

<style scoped>
#popup {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 300px;
  height: 200px;
  background-color: darkgrey;
  border-radius: 15px;
  left: calc(50% - 150px);
  top: calc(50% - 100px);
}

.popup_title {
}

</style>
