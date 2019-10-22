<template>
  <div :class="['dsj_btn',
      type ? 'fsj_button--' + type : ''
    ]"
    :style="`width: ${width}px`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dsj-button',
  props: {
    type: {
      type: [String, Number],
      default: '1'
    },
    width: {
      type: [String, Number],
      default: '160'
    }
  }
}
</script>
<style scoped>
.dsj_btn {
  box-sizing: border-box;
  transition-property: all;
  transition-duration: .6s;
  transition-timing-function: ease;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin: 0 0 2em;
  width: 160px;
  text-align: center;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  height: 30px;
}
.dsj_btn:hover {
  text-decoration: none;
}
.dsj_btn > span {
  display: inline-block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.fsj_button--1 {
  letter-spacing: 0;
}

.fsj_button--1:hover,
.fsj_button--1:active {
  letter-spacing: 5px;
}

.fsj_button--1:after,
.fsj_button--1:before {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

.fsj_button--1:hover:after,
.fsj_button--1:hover:before {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  border-color: #fff;
  transition: width 350ms ease-in-out;
  width: 70%;
}

.fsj_button--1:hover:before {
  bottom: auto;
  top: 0;
  width: 70%;
}

.fsj_button--2 {
  background: #e3403a;
  border: 1px solid #da251f;
  box-shadow: 0px 2px 0 #d6251f, 2px 4px 6px #e02a24;
  font-weight: 900;
  letter-spacing: 1px;
  transition: all 150ms linear;
}

.fsj_button--2:hover {
  background: #e02c26;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.2);
  color: #ec817d;
  text-decoration: none;
  text-shadow: -1px -1px 0 #c2211c;
  transition: all 250ms linear;
}

.fsj_button--3 {
  border: 1px solid;
  overflow: hidden;
  position: relative;
}
.fsj_button--3 span {
  z-index: 20;
}
.fsj_button--3:after {
  background: #fff;
  content: "";
  height: 155px;
  left: -75px;
  opacity: .2;
  position: absolute;
  top: -50px;
  -webkit-transform: rotate(35deg);
          transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
}

.fsj_button--3:hover:after {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}

.fsj_button--4 {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.fsj_button--4:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
</style>