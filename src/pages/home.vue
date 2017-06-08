<template>
  <div class="main">
    <div class="EditorHeader">
      <home-head></home-head>
    </div>
    <div class="grid">
      <div class="gridLeft">
        <left-sider></left-sider>
        <div class="resize-bar-h"></div>
      </div>
      <div class="gridRight">
        <div class="entryInner">
          <div class="workSpace">
            <div class="scrollArea">
              <div class="editContainer">
                <div class="DocumentEditor" contenteditable="false">
                  <div class="SlateEditor">
                      <right-sider></right-sider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import homeHead from '../components/head.vue'
    import leftSider from '../components/leftSider.vue'
    import rightSider from '../components/rightSider.vue'
    export default {
      components: {
        name: 'home',
        homeHead,
        leftSider,
        rightSider
      }
    }
</script>

<style>
  div.main{position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #fafafa;}
    div.grid{width:100%;height:100%;position:relative;}
    div.gridLeft{top: 0%;left: 0%;height: 100%;width: 15%;position:absolute}
    div.gridLeft div.resize-bar-h{position: absolute;right: 0;width: 1px;top: 0;bottom: 0;background: #ddd;cursor: col-resize;}
    div.gridRight{top: 0%; left: 15%;height: 100%;width: 85%;position:absolute}
    div.entryInner{position: absolute;top: 0;right: 0;left: 0;bottom: 0;overflow: hidden;}
    div.entryInner div.workSpace {width:100%;height:100%;}
    div.entryInner div.workSpace div.scrollArea{width:100%;height:100%;overflow:auto;}
    div.entryInner div.workSpace div.scrollArea div.editContainer{background: #fafafa;padding-top: 20px;padding-bottom: 20px;height:100%;}
    div.entryInner div.workSpace div.scrollArea div.editContainer div.DocumentEditor{font-size:14px;max-width: 900px;
    min-height: 1056px;
    margin-left: auto!important;
    margin-right: auto!important;
    background: #fff;
    border: 1px solid #e8eaed;
    border-radius: 2px;
    padding: 30px;
    cursor: text;
    position: relative;}
</style>
