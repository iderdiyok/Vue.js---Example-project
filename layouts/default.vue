<template>
    <nuxt />
</template>
<script>
  export default {
    components: {
    },
    head(){
      return {
        title: "TOBIAS KRASKA - Meisterbetrieb"
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 1000)
      })
    }
  }
</script>
<style>
</style>
