<template>
  <div class="article">
     <div class="articleTitle">
      <input type="text" 
        v-model="articleTitle"
        v-on:blur="canEditTitle=true"
        v-on:keyup.enter="canEditTitle=true"
        v-bind:disabled='canEditTitle'
        v-focus="true"
        v-on:keyup.esc="cancleEdit"
        >
       <el-button icon="edit" @click="startEdit">修改文章标题</el-button>
    </div>
    <section>
      <el-button icon="edit" @click="reverseTitle">反转标题</el-button>
      <el-button @click="num+=1">增加+1</el-button>
    </section>
    <p>{{num}}</p>
    <div>
        <my-child v-on:add='addNum' v-on:reduce='reduceNum' v-bind:num="num">1111</my-child>
    </div>
  </div>
</template>
<script>
  import myChild from '../.././components/child.vue'
  export default {
    components: {
      myChild
    },
    data: () => {
      return {
        articleTitle: '文章标题',
        canEditTitle: true,
        oldTitle: '',
        newTitle: '',
        answer: 'I cannot give you an answer until you ask a question!',
        num: 0
      }
    },
    directives: {
      focus: {
        update (el, binding) {
          if (binding.value) {
            el.focus()
          }
        }
      }
    },
    methods: {
      startEdit () {
        this.canEditTitle = false
        this.oldTitle = this.articleTitle
      },
      cancleEdit () {
        this.canEditTitle = true
        this.articleTitle = this.oldTitle
        this.oldTitle = ''
      },
      reverseTitle () {
        var res = [].slice.call(this.articleTitle).reverse().join('')
        this.articleTitle = res
      },
      addNum () {
        this.num++
      },
      reduceNum () {
        this.num--
      }
    },
    computed: {
      reversedTitle: function () {
        return [].slice.call(this.articleTitle).reverse().join('')
      }
    },
    watch: {
      articleTitle: function (newArticle) {
        console.log('change' + Date.now())
      }
    }
  }
</script>
<style>
  div.articleTitle{text-align:left;position:relative;}
  div.articleTitle input{line-height: 30px;border:none;background:#fff;outline:none;}
  div.articleTitle button{float:right;}
  div.articleTitle:after{content:'.';display:block;height:1;visibility: hidden;}
  div.article section {text-align:left;}
</style>

