<template>
  <div class="citySelect">
      <p>
        <input type="text" v-on:click="selectShow=!selectShow" v-bind:value="val">
        <span class="go">{{btnValue}}</span>
      </p>
      <customs-list v-on:receive="changeValueHandle" v-show="selectShow" v-bind:items="list"></customs-list>
  </div>
</template>
<script>
  import customsList from './customsList.vue'
  export default {
    data: function () {
      return {
        selectShow: false,
        val: ''
      }
    },
    props: ['btnValue', 'list'],
    components: {
      customsList
    },
    methods: {
      changeValueHandle (item) {
        this.val = item
      }
    }
  }
</script>
<style scoped>
  div.citySelect{background: rgba(255, 49, 0, 0.87);width: 320px;border-radius: 10px;}
  div.citySelect p input{text-indent:20px;margin-left:20px;margin-top:10px;margin-bottom:10px;height:30px;line-height: 30px;width:200px;border-radius:20px;outline:none;border:none;background:rgba(0,0,0,.4);color:#fff;}
  div.citySelect p span.go{font-size:14px;width:50px;height:30px;line-height:30px;text-align:center;color:#fff;border-radius:30px;display:inline-block;background:#3c1f1f;}
  
</style>

