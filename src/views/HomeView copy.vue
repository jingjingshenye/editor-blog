<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const editor = ClassicEditor;
const editorData = "<p>Content of the editor</p>";
const editorConfig = {
  // toolbar: {
  //   items: [
  //     "heading",
  //     "|",
  //     "bold",
  //     "italic",
  //     "link",
  //     "bulletedList",
  //     "numberedList",
  //     "blockQuote",
  //     "insertTable",
  //     "mediaEmbed",
  //     "undo",
  //     "redo",
  //   ],
  // },
  // table: {
  //   contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  // },
};
</script>

<template>
  <main class="">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </main>
</template>
<style scoped lang="scss">
main {
  padding: 20px;
  margin: 0 auto;
}

// .ck-editor__editable_inline {
//   min-height: 200px;
// }

// .ck-editor__editable_inline:empty:before {
//   content: attr(data-placeholder);
// }
</style>
