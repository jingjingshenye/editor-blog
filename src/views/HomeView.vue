<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEditorDataStore } from "../stores/editorData";
import { useRouter } from "vue-router";
const editorDataStore = useEditorDataStore();
const router = new useRouter();
const content = ""; // 内容
let options = {
  placeholder: "please input here",
  theme: "snow",
  modules: {
    toolbar: {
      container: editorDataStore.toolbarOptions, // 显示配置
      handlers: {
        // 逻辑配置
        // "image": this.handleImageButton, // 自定义 image 按钮的处理函数
        // "clean": this.handleCleanButton, // 自定义 clean 按钮的处理函数
        // ...
      },
    },
  },
}; // 配置

// contentType 的取值也非常重要，因为这会影响 content 保存值的类型
// 若 contentType 设置为 text，则 content 保存值的类型为 text

function handlePreview() {
  // 预览
  router.push({
    path: "/preview",
  });
}
</script>

<template>
  <div class="wrapper">
    <!-- 注意区别，content 和 contentType -->
    <div class="container">
      <quill-editor
        ref="QuillEditor"
        v-model:content="editorDataStore.content"
        v-bind:options="options"
        contentType="html"
      />
    </div>
  </div>
  <div class="btn" @click="handlePreview">预览</div>
</template>
<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
}
.container {
  padding: 20px;
  margin: 0 auto;
  height: 80vh;
}
.btn {
  width: 100px;
  height: 50px;
  border-radius: 25px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(90, 165, 235);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

// .ck-editor__editable_inline {
//   min-height: 200px;
// }

// .ck-editor__editable_inline:empty:before {
//   content: attr(data-placeholder);
// }
</style>
