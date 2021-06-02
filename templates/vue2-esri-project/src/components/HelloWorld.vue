<template>
  <div
    :id="id"
    class="map-container"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useCreate } from '~hooks/map.hooks'
export default defineComponent({
  setup () {
    const [, id] = useCreate()
    return {
      id,
    }
  }
})
</script>

<style lang="scss" scoped>
.map-container {
  width: 100vw;
  height: 100vh;
}
</style>
