<template>
  <div class="carUseDetail">
    车辆详情页面：{{router}}号车
  </div>  
</template>
<script>
  export default {
    data: function () {
      return {
        router: this.$route.query.carNum
      }
    },
    mounted: function () {
      console.log(this.$route.query.carNum)
    }
  }
</script>
