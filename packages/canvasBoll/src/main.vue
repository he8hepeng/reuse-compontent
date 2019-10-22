<template>
  <div>
    <canvas id="dsj-canvas__boll" style="border-radius: 100%;"></canvas>
  </div>
</template>
<script>
export default {
  name: 'dsj-canvasboll',
  props: {
    score: {
      type: [ String, Number ],
      default: 100,
      required: true
    },
    color: {
      type: Array,
      default: () => {
        return [{
          to: 'rgba(254,200,85, 1)',
          from: 'rgba(255,202,87, 0.2)'
        },{
          to: 'rgba(254,200,85, 0.6)',
          from: 'rgba(255,202,87, 0.2)'
        }]
      }
    },
    distance: {
      type: Object,
      default: () => {
        return {
          w: 155,
          h: 155
        }
      }
    },
    titleSold: {
      type: Boolean,
      default: true
    },
    suffix: {
      type: String
    }
  },
  watch: {
    'score': {
      handler () {
        this.canvasBoll.BOLL_SCORE = this.score / 100
      }
    },
    'color': {
      handler () {
        this.canvasBoll.BOLL_LINES = this.color
      }
    }
  },
  data () {
    return {
      canvasBoll: {
        BOLL_STEP: 0, // 循环次数
        BOLL_LINES: [], // 颜色
        BOLL_SCORE: 100, // 分数
        BOLL_CANVAS: null, // canvas body
        BOLL_CTX: null, // ctx
        BOLL_SCORELAST: 0
      }
    }
  },
  created () {
    this.canvasBoll.BOLL_LINES = this.color
    this.canvasBoll.BOLL_SCORE = this.score / 100
  },
  mounted () {
    this.canvasBoll.BOLL_CANVAS = document.getElementById('dsj-canvas__boll')
    this.canvasBoll.BOLL_CANVAS.width = this.distance.w
    this.canvasBoll.BOLL_CANVAS.height = this.distance.h
    this.canvasBoll.BOLL_CTX = this.canvasBoll.BOLL_CANVAS.getContext('2d')
    this.loop()
  },
  methods: {
    requestAnimFrame (callback) {
      window.setTimeout(callback, 1000 / 60);
    },
    async loop () {
      this.canvasBoll.BOLL_CTX.clearRect(0, 0, this.canvasBoll.BOLL_CANVAS.width, this.canvasBoll.BOLL_CANVAS.height)
      this.canvasBoll.BOLL_CTX.fillStyle = '#dfeaff'
      this.canvasBoll.BOLL_CTX.fillRect(0, 0, this.canvasBoll.BOLL_CANVAS.width, this.canvasBoll.BOLL_CANVAS.height)
      this.canvasBoll.BOLL_STEP++
      await this.rectLine()
      if (this.titleSold) {
        this.canvasBoll.BOLL_CTX.font = '28px bold 黑体'
        this.canvasBoll.BOLL_CTX.fillStyle = '#fff'
        this.canvasBoll.BOLL_CTX.textAlign = 'center'
        this.canvasBoll.BOLL_CTX.fillText(this.score + this.suffix, this.canvasBoll.BOLL_CANVAS.width / 2, this.canvasBoll.BOLL_CANVAS.height / 2)
      }
      this.requestAnimFrame(this.loop)
    },
    rectLine () {
      return new Promise((resolve) => {
        for(let j = this.canvasBoll.BOLL_LINES.length - 1 ; j >= 0; j--) {
          let my_gradient = this.canvasBoll.BOLL_CTX.createLinearGradient(0, 0, 0, 170)
          if(j == 1){
            my_gradient.addColorStop(0, this.canvasBoll.BOLL_LINES[j].to)
            my_gradient.addColorStop(1, this.canvasBoll.BOLL_LINES[j].from)
            this.canvasBoll.BOLL_CTX.fillStyle = my_gradient
          }else{
            my_gradient.addColorStop(0, this.canvasBoll.BOLL_LINES[j].to)
            my_gradient.addColorStop(1, this.canvasBoll.BOLL_LINES[j].from)
            this.canvasBoll.BOLL_CTX.fillStyle = my_gradient
          }
          //每个矩形的角度都不同，每个之间相差45度

          let angle = (this.canvasBoll.BOLL_STEP+j*30)*Math.PI/90
          let deltaHeight   = Math.sin(angle) * 10
          let deltaHeightRight   = Math.cos(angle) * 10
          //console.log(this.canvasBoll.BOLL_CANVAS.height*this.canvasBoll.BOLL_SCORELAST+deltaHeight,this.canvasBoll.BOLL_CANVAS.height/2+deltaHeight)
          this.canvasBoll.BOLL_CTX.beginPath()
          if (this.canvasBoll.BOLL_SCORELAST != Number(this.score)) {
            if (this.canvasBoll.BOLL_SCORELAST < Number(this.score)) {
              this.canvasBoll.BOLL_SCORELAST = Number(this.score) - this.canvasBoll.BOLL_SCORELAST <= 2 ? this.canvasBoll.BOLL_SCORELAST = Number(this.score) : this.canvasBoll.BOLL_SCORELAST + 1
            } else {
              this.canvasBoll.BOLL_SCORELAST = this.canvasBoll.BOLL_SCORELAST - Number(this.score) <= 2 ? this.canvasBoll.BOLL_SCORELAST = Number(this.score) : this.canvasBoll.BOLL_SCORELAST - 1
            }
          }
          this.canvasBoll.BOLL_SCORE = this.canvasBoll.BOLL_SCORELAST / 100
          this.canvasBoll.BOLL_CTX.moveTo(0, this.canvasBoll.BOLL_CANVAS.height-this.canvasBoll.BOLL_CANVAS.height*this.canvasBoll.BOLL_SCORE+deltaHeight)
          if(j == 1){
            this.canvasBoll.BOLL_CTX.bezierCurveTo(this.canvasBoll.BOLL_CANVAS.width / 2, this.canvasBoll.BOLL_CANVAS.height-this.canvasBoll.BOLL_CANVAS.height*this.canvasBoll.BOLL_SCORE+deltaHeightRight, this.canvasBoll.BOLL_CANVAS.width / 2, this.canvasBoll.BOLL_CANVAS.height-this.canvasBoll.BOLL_CANVAS.height*this.canvasBoll.BOLL_SCORE+deltaHeight, this.canvasBoll.BOLL_CANVAS.width, this.canvasBoll.BOLL_CANVAS.height-this.canvasBoll.BOLL_CANVAS.height*this.canvasBoll.BOLL_SCORE+deltaHeight)
          }else{
            this.canvasBoll.BOLL_CTX.bezierCurveTo(this.canvasBoll.BOLL_CANVAS.width / 2, this.canvasBoll.BOLL_CANVAS.height-this.canvasBoll.BOLL_CANVAS.height*this.canvasBoll.BOLL_SCORE+deltaHeight, this.canvasBoll.BOLL_CANVAS.width / 2, this.canvasBoll.BOLL_CANVAS.height-this.canvasBoll.BOLL_CANVAS.height*this.canvasBoll.BOLL_SCORE+deltaHeightRight, this.canvasBoll.BOLL_CANVAS.width, this.canvasBoll.BOLL_CANVAS.height-this.canvasBoll.BOLL_CANVAS.height*this.canvasBoll.BOLL_SCORE+deltaHeightRight)
          }
          this.canvasBoll.BOLL_CTX.lineTo(this.canvasBoll.BOLL_CANVAS.width, this.canvasBoll.BOLL_CANVAS.height)
          this.canvasBoll.BOLL_CTX.lineTo(0, this.canvasBoll.BOLL_CANVAS.height)
          this.canvasBoll.BOLL_CTX.lineTo(0, this.canvasBoll.BOLL_CANVAS.height * this.canvasBoll.BOLL_SCORE + deltaHeight)
          this.canvasBoll.BOLL_CTX.closePath()
          this.canvasBoll.BOLL_CTX.fill()
        }
        resolve()
      })
    }
  }
}
</script>