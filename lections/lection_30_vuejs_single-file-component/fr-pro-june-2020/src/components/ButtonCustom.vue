<template>
  <div>
      <h2>
          ButtonCustom
      </h2>
      Val: {{ val }}
      <br>

      Component name value: {{ name }}
      <input type="text" :value="name" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
    name: 'ButtonCustom',
    model: {
        prop: 'name',
        event: 'input'
    },
    props: {
        val: Number,
        name: String
    }
}
</script>

<style>

</style>