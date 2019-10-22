<template>
  <div id="app">
    <dsj-button type="4" :width="200">保存</dsj-button>
    <dsj-canvasboll
      :titleSold='true'
      :suffix='"分"'
      :score='score'
      :color='bollColor'
      :distance='distance'/>
      <input type="text" v-model="score">
      <sdj-Diffusion></sdj-Diffusion>
      <dsj-bgLz></dsj-bgLz>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      bollColor: [{
        to: 'rgba(254,200,85, 1)',
        from: 'rgba(255,202,87, 0.2)'
      },{
        to: 'rgba(254,200,85, 0.6)',
        from: 'rgba(255,202,87, 0.2)'
      }],
      distance: {
        w: 155,
        h: 155
      },
      score: 100
    }
  }
}
</script>

<style>
#app,html,body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #E1332D;
  font-family: 'Roboto', sans-serif;
}
</style>
