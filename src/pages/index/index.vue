<template>
  <div id="applycation">
    <div class="desktop-window platform-windows">
      <div class="window-container">
        <myHeader></myHeader>
        <div class="Grid">
          <div class="GridEntry leftEntry">
            <siderBar></siderBar>
          </div>
          <div class="GridEntry rightEntry">
            <div class="rightSider">
              <div class="entryInner">
                 <div class="workspace">
                   <div class="scrollArea">
                     <div class="editcontainer">
                       <div class="documentedit">
                         <router-view></router-view>
                       </div>
                     </div>
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
    import myHeader from '../../components/head.vue'
    import siderBar from '../../components/siderBar.vue'
    export default {
      components: {
        myHeader,
        siderBar
      }
    }
</script>

<style scope>
  #application{position: fixed;top: 0;bottom: 0;right: 0;left: 0;background: #fafafa;}
  .platform-windows{    position: fixed;top: 0;right: 0;left: 0;bottom: 0;width:100%;height:100%}
  .desktop-window .window-container{width: 100%;height: 100%;}
  div.Grid{width:100%;height:100%;position:relative;}
  div.Grid .GridEntry{position:absolute;}
  div.Grid .GridEntry.leftEntry{background:#eef1f6;top: 0%;left: 0%;height: 100%;width: 15%;}
  div.Grid .GridEntry.rightEntry{background:#ccdc76;top: 0%;left: 15%;height: 100%;width: 85%;}
  .Grid .GridEntry .entryInner{position: absolute;top: 0;right: 0;left: 0;bottom: 0;overflow: hidden;background:#fff;}
  .Grid .GridEntry .entryInner .workspace{width:100%;height:90%;box-sizing: border-box}
  .Grid .GridEntry .entryInner .workspace .scrollArea{width: 100%;height: 100%;overflow: auto;box-sizing: border-box}
  .Grid .GridEntry .entryInner .workspace .scrollArea .editcontainer{background: #fafafa;padding-top: 20px; padding-bottom: 20px;}
  .Grid .GridEntry .entryInner .workspace .scrollArea .editcontainer .documentedit{user-select: text;max-width: 900px;min-height: 1056px;margin-left: auto!important;margin-right: auto!important;background: #fff;border: 1px solid #e8eaed;border-radius: 2px;padding: 30px;cursor: text;position: relative;}




</style>
