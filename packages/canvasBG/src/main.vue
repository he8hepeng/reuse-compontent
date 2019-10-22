<template>
  <div id="dsj-lzCanvas"></div>
</template>
<script>
import ParticleNetworkAnimation from './canvasbg.js'
export default {
  name: 'dsj-bgLz',
  data () {
    return {
      PNA: null
    }
  },
  mounted () {
    this.PNA = new ParticleNetworkAnimation()
    this.PNA.init(document.getElementById('dsj-lzCanvas'))
  }
}


</script>
<style scoped>
#dsj-lzCanvas {
  height: 100%;
  width: 100%;
}
</style>