<template>
   <div class="cityWrap">
        <ul class="cityList">
          <li v-for="item of items" v-on:click="selectValueHandle(item)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
  export default {
    props: ['items'],
    methods: {
      selectValueHandle: function (item) {
        // 在子组件中有交互
        // 告知父级，改变val的值，需要触发一个自定义事件
        this.$emit('receive', item)
      }
    }
  }
</script>
<style scoped>
   div.cityWrap ul.cityList{border-radius:5px;margin-top:10px;display:inline-block;}
  div.cityWrap ul.cityList li{font-size:14px;margin-left:20px;border-radius:30px;cursor:pointer;margin-bottom:10px;transition:all linear .5s;text-align:left;width:200px;height:20px;line-height:20px;padding-left:20px;box-sizing:border-box;color:#fff;}
   div.cityWrap ul.cityList li:hover{background:rgba(0,0,0,1)}
</style>
