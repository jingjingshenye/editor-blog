<template>
  <div class="preview">
    <div class="wrapper">
      <div class="ql-container ql-snow">
        <div class="ql-editor">
          <div v-html="editorDataStore.content"></div>
        </div>
      </div>
      <div class="btn" @click="exportMarkdown">出为Markdown</div>
    </div>
  </div>
</template>
<script setup>
import TurndownService from "turndown";
import { useEditorDataStore } from "../stores/editorData";
const editorDataStore = useEditorDataStore();
//最终的结果是我们需要获取编辑的内容并保存到服务器中，这个不用多讲，获取容器的内容即可，但需要注意的是需要在获取的内容外包上两个div容器，不然展示页面不能展示编辑时所见的效果，同样，展示界面也需要引入quill的css以及highlight的css。
function exportMarkdown() {
  const turndownService = new TurndownService();
  const markdown = turndownService.turndown(editorDataStore.content);
  console.log(markdown);

  downFile(`data:text/markdown;charset=utf-8,${encodeURIComponent(markdown)}`);
}

const downFile = (url) => {
  const a = document.createElement("a");
  const fileName = "导出文件.md";
  a.style.display = "none";
  a.download = fileName;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  /*
   * download: HTML5新增的属性
   * url: 属性的地址必须是非跨域的地址
   */
};
</script>
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
}

.btn {
  width: 160px;
  height: 40px;
  border-radius: 25px;
  position: absolute;
  bottom: 10px;
  right: 30px;
  background-color: rgb(90, 165, 235);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
