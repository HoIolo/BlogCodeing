<template>
  <div class="container">
      <slot></slot>
      <ContainerRight/>
  </div>
</template>

<script>
import ContainerRight from 'components/container/ContainerRight.vue'

export default {
    components: {
        ContainerRight
    }
}
</script>

<style>

</style>