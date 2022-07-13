<template>
  <div>
    <VueMultiselect
      v-model="selected"
      :options="options"
    />
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
export default {
  components: { VueMultiselect },
  data () {
    return {
      selected: null,
      options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'touched']
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>