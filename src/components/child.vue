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
      <div>
        <span>{{hello}}</span>
        <el-button @click="updateHello">更新</el-button>
      </div>
    </div>
</template>
<script>
  export default {
    props: ['num'],
    data: function () {
      return {
        hello: 'helloworld'
      }
    },
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
      },
      updateHello () {
        fetch('http://localhost:3000').then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log('Oops, error', e))
      }
    }
  }
</script>
