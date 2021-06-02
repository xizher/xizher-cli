<template>
  <div
    :id="id"
    class="map-container"
  />
</template>

<script lang="ts" setup>
import { useCreate } from '~hooks/map.hooks'
const [, id] = useCreate()
</script>

<style lang="scss" scoped>
.map-container {
  width: 100vw;
  height: 100vh;
}
</style>
