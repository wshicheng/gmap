<template>
    <div class="leftSider">
        <el-row class="tac">
            <el-col :span="24">
                <ul>
                  <router-link key="file.titile" v-bind:to='file.url' tag="li" v-for="file of files">{{file.title}}
                    <i class="el-icon-edit" v-on:click="showEditHandle(file)"></i>
                    <div class="editTitle" v-show="file === editTitle">
                      <input type="text" v-model="file.title" v-on:blur="editEndFile" v-on:keyup.enter="editEndFile" v-on:keyup.esc="cancleEditFile(file)">
                    </div>
                  </router-link>
                </ul>
            </el-col>
        </el-row>
        <div class="addFile">
          <div class="addbutton">
             <el-button @click="isDialogShow=true"><i class="el-icon-plus"></i>Add an Article</el-button>
          </div>
          <div class="dialog">
            <custom-dialog v-bind:formItems="form" v-show="isDialogShow" v-bind:isShow="isDialogShow" v-on:submit="submitDialog" v-on:receive="changeDialogShow"></custom-dialog>
            </el-dialog>
          </div>
        </div>
    </div>
</template>

<script>
import customDialog from './customDialog.vue'
export default {
  name: 'leftSider',
  data: function () {
    return {
      files: [
        {
          title: 'todoMVC',
          url: '/activePublic'
        },
        {
          title: '热力图',
          url: '/activeManage'
        },
        {
          title: '属性与方法',
          url: '/attribute'
        }
      ],
      beforeEditTitle: '',
      editTitle: '',
      showEditArea: false,
      dialogFormVisible: false,
      form: {
        desc: ''
      },
      formLabelWidth: '120',
      isDialogShow: false
    }
  },
  methods: {
    showEditHandle (file) {
      this.editTitle = file
      this.beforeEditTitle = file.title
    },
    editEndFile () {
      this.editTitle = ''
    },
    cancleEditFile  (file) {
      file.title = this.beforeEditTitle
      this.beforEditTitle = ''
      this.editTitle = ''
    },
    changeDialogShow (isShow) {
      this.isDialogShow = !isShow
    },
    submitDialog (isShow, desc) {
      this.files.push({
        title: desc,
        url: '/' + desc
      })
      this.isDialogShow = !isShow
    }
  },
  components: {
    customDialog
  }
}
</script>

<style>
    div.leftSider{width:100%;}
    div.leftSider ul li{position:relative;height:40px;line-height:40px;font-size:14px;text-align:left;padding-left:10px;}
    div.leftSider ul li div.editTitle{position: absolute;left: 5px;top: 0px;width: calc(100% - 10px);height: 100%;}
    div.leftSider ul li div.editTitle input{border-radius:5px;line-height: 30px;width: 100%;outline: none;border: 1px solid #3884ff;box-sizing: border-box;position: absolute;left: 0;top: 5px;text-indent: 5px;}
    div.leftSider ul li.router-link-active{background:#3884ff;color:#fff}
    div.leftSider ul li i.el-icon-edit{font-size:12px;position:absolute;right:5%;top:0;bottom:0;line-height:40px;opacity:0;transition:all linear 1s;cursor:pointer;}
    div.leftSider ul li:hover i.el-icon-edit{opacity:1}
    div.addFile{margin-top:10px;}
    div.addFile div.addbutton button.el-button{color:#3884ff;font-weight: bold;}
    div.addFile div.addbutton button.el-button:hover{background:rgba(151,185,241,.4)}
    div.addFile div.addbutton button.el-button i.el-icon-plus{font-size:12px;vertical-align: top;margin-right:5px;}
   
</style>

