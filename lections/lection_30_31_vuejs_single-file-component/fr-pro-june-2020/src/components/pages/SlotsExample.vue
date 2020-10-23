<template>
  <div>
    <PopupDefault
      title="Title Slots"
    >
<!--      Angular - transclude -> ng-content -->
<!--      React - children -->
<!--      Vue - slots -->
      Some children data: {{ list }}
      <template v-slot:version_1>
        Success
      </template>
      <template v-slot:version_2>
        Something went wrong
      </template>
      <template v-slot:special_list="data">
        {{ [...list, ...data.localList] }}
      </template>
    </PopupDefault>
  </div>
</template>

<script>
import PopupDefault from '../PopupDefault'

export default {
  name: 'SlotsExample',
  components: {
    PopupDefault
  },
  data () {
    return {
      list: ['Name 1', 'Name 2', 'Name 3', 'Name 4']
    }
  },
  created() {
    console.log(store)
    let value = 888;

    value = JSON.stringify(value);

    store.addValue(value)
  }
}
</script>

<style scoped>

</style>
