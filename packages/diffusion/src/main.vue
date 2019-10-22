<template>
  <div class="fd-dsj_borks">
    <div class="fd-dsj_ksAnim">
      <div class="fd-dsj_demoLine fd-dsj_anim1"></div>
      <div class="fd-dsj_demoLine fd-dsj_anim2"></div>
      <div class="fd-dsj_demoLine fd-dsj_anim3"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "sdj-Diffusion"
}
</script>
<style scoped>
  /* CSS扩散 */

.fd-dsj_borks {
  width: 100%;
  height: 100px;
  position: relative;
}

.fd-dsj_ksAnim {
  width: 60px;
  height: 142px;
  position: relative;
}

.fd-dsj_demoLine {
  width: 60px !important;
  height: 142px !important;
  border: 4px solid #0090cc;
  border-radius: 100%;
  transform-style: preserve-3d;
  position: absolute;
  transform: rotateZ(89deg) rotateY(40deg) scale(0);
  left: 42px;
  bottom: -13px;
}

.fd-dsj_anim1 {
  animation: dsj_kuosan 3s infinite;
}

.fd-dsj_anim2 {
  animation: dsj_kuosan 3s infinite;
  animation-delay: 1s
}

.fd-dsj_anim3 {
  animation: dsj_kuosan 3s infinite;
  animation-delay: 2s
}

@keyframes dsj_kuosan {
  0% {
    opacity: 1;
    transform: rotateZ(89deg) rotateY(40deg) scale(0);
  }

  90% {
    transform: rotateZ(89deg) rotateY(40deg) scale(1);
  }

  100% {
    opacity: 0;
    transform: rotateZ(89deg) rotateY(40deg) scale(1);
  }
}
</style>