<template>
  <div class="activePublic">
    <div class="page-content">
      <h2>任务计划列表</h2>
    </div>
    <div class="addTask">
      <h3>添加任务</h3>
      <p class="insertTask">
        <input type="text"
         placeholder="例如：吃饭睡觉打豆豆,提示：+回车即可添加任务"
         v-on:keyup.enter="addTodo"
         v-model="todo"
         >
      </p>
     <div class="horizonSelect">
        <customs-select v-bind:list="cityList" btn-value="查询"></customs-select>
        <customs-select v-bind:list="timeList" btn-value="搜索"></customs-select>
     </div>
      <p class="taskStatus">
        <span v-bind:class="{red:items.length}" v-show="items.length">{{isNotCheckedNum}}个任务未完成</span>
        <ul>
          <li>所有任务</li>
          <li>未完成任务</li>
          <li>完成的任务</li>
        </ul>
      </p>
    </div>
    <div class="taskList">
      <p class="taskList">任务列表：</p>
      <p class="info" v-show="!items.length">还没有添加任务任务</p>
      <ul class="todo-list">
        <li class="todo" v-for="(item,index) of items">
          <div class="view">
              <span class="checkbox">
                <i  v-on:click="toggle(index)" v-bind:class="{sign:true,completed:item.isChecked}" >√</i>
                 <input type="checkbox" class="radioclass input">
              </span>
              <label v-on:dblclick="editText(item)" v-bind:class="{completed:item.isChecked}">{{item.title}}</label>
              <button class="destroy" v-on:click="removeTodo(index)">删除</button>
          </div>
          <div v-bind:class="{edit:true,editing:item===editTodo}">
             <input 
                v-focus="editTodo===item"
                type="text" 
                class="edit" 
                v-model="item.title"
                v-on:blur="editEndTodo(item)"
                v-on:keyup.enter="editEndTodo(item)"
                @keyup.esc = "cancelEdit(item)"
                >
          </div>
        </li>
      </ul>
    </div>   
  </div>
</template>
<script>
  import customsSelect from '../.././components/customsSelect.vue'
  var store = {
    save (key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    fetch (key) {
      return JSON.parse(localStorage.getItem(key) || '[]')
    }
  }
  var items = store.fetch('mydata')
  export default {
    data: function () {
      return {
        items: items,
        todo: '',
        editTodo: '', // 记录正在编辑的数据,
        beforeTitle: '', // 记录正在编辑的数据,
        selectNum: 0,
        cityList: ['上海', '北京', '合肥', '南京'],
        timeList: ['2017-6-6', '2017-6-7', '2017-6-9']
      }
    },
    components: {
      customsSelect
    },
    watch: {
      /* items: function () {
        // 监控items 当这个属性对应的值发生变化 就执行函数
        store.save('mydata', this.items)
      } */
      items: {
        handler: function () {
          store.save('mydata', this.items)
        },
        deep: true // 深度监控
      }
    },
    methods: {
      addTodo () {
        this.items.push({
          title: this.todo,
          isChecked: false
        })
        this.todo = ''
      },
      removeTodo (index) {
        this.items.splice(index, 1)
      },
      toggle (index) {
        this.items[index].isChecked = !this.items[index].isChecked
      },
      editText (item) {
       // 编辑任务的时候记录一下 titile
        this.beforeTitle = item.title
        this.editTodo = item
      },
      editEndTodo (item) {
        this.editTodo = ''
      },
      cancelEdit (item) {
        item.title = this.beforeTitle
        this.editTodo = ''
        this.beforeTitle = ''
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
    computed: {
      isNotCheckedNum: function () {
        return this.items.filter((item) => !item.isChecked).length
      }
    }
  }
</script>
<style scoped>
  ul li{list-style-type:none;}
  .activePublic{text-align: left;padding-left:10px;}
  .addTask{text-align: left;}
  .addTask h3{margin-bottom:10px;margin-top:10px;font-size:18px;}
  .addTask .insertTask{margin-bottom:10px;}
  .addTask .insertTask input{height:30px;}
  .addTask .taskStatus{margin-bottom:10px;line-height:32px;margin-top:10px;}
  .addTask .taskStatus span{line-height: 34px; height: 34px;display: inline-block;margin-right: 53px;}
  .addTask .taskStatus span.red{color:red}
  .addTask .taskStatus ul{float:right;}
  .taskStatus ul li{float:left;padding:0 10px;border:1px solid grey;margin-right:10px;}
  div.taskList p.taskList{font-size:16px;margin-bottom:10px;}
  div.taskList p.info{padding-left:10px;font-size:12px;}
  .view span.checkbox{width:20px;height:20px;background:#fff;border:1px solid #555;position:relative;margin:0;border-radius:3px;display:inline-block;}
  .view span.checkbox input{visibility: hidden;width:0;height:0;}
  .view span.checkbox i.sign{width:20px;height:20px;line-height:20px;text-align:center;float:left;opacity:0;}
  .view span.checkbox i.completed{opacity:1;}
  .view label.completed{text-decoration: line-through;color:#ddd;}
  ul.todo-list li.todo{position:relative;margin-bottom:20px;}
  ul.todo-list li.todo div.edit{display:none;position:absolute;left:0;top:0;}
  ul.todo-list li.todo div.edit input{height:24px;}
  ul.todo-list li.todo div.editing{display:block;}
  div.horizonSelect div.citySelect{display:inline-block;}
  
</style>

