<template>
    <div>
      <div>
        计数器{{msg}}
        <el-button v-on:click="increment">+</el-button>
        <el-button v-on:click="decrement">-</el-button>
      </div>
      <div>
        <h2>我是子组件的标题</h2>
        <slot>
          只有在没有要分发的内容时才会显示
        </slot>
      </div>
    </div>
</template>
<script>
  export default {
    props: ['num'],
    computed: {
      msg: function () {
        return this.num
      }
    },
    methods: {
      increment () {
        this.$emit('add')
      },
      decrement () {
        this.$emit('reduce')
      }
    }
  }
</script>
